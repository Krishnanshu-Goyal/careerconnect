import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, accuracy_score
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv(r'C:\Users\shrey\Documents\MAJOR PROJECT\Project\careerconnect\mydatabase.feedback.csv')

# Drop unnecessary columns
columns_to_drop = ['_id','companyName', 'strengths', 'weakness', 'additionalAdvice']
df = df.drop(columns=columns_to_drop)

# Define category mappings (example mappings; replace with your mappings)
category_mappings = {
    "duration": {
        "Less than 6 months": 1,
        "6 months - 1 year": 2,
        "1-2 years": 3,
        "2-5 years": 4,
        "More than 5 years": 5
    },
    "culture": {
        "Supportive": 4,
        "Average": 3,
        "Competitive": 2,
        "Toxic": 1
    },
    "workLifeBalance": {
        "Excellent": 4,
        "Good": 3,
        "Average": 2,
        "Poor": 1
    },
    "inclusive": {
        "Highly Inclusive": 3,
        "Moderately Inclusive": 2,
        "Needs Improvement": 1
    },
    "colleagues": {
        "Highly Supportive": 3,
        "Moderately Supportive": 2,
        "Not very Supportive": 1
    },
    "safety": {
        "Very comfortable and safe": 3,
        "Somewhat comfortable": 2,
        "Needs improvement": 1
    },
    "grievances": {
        "Yes": 3,
        "No Idea": 2,
        "No": 1
    },
    "overtime": {
        "Rarely": 3,
        "Sometimes": 2,
        "Frequently": 1
    },
    "compensation": {
        "Yes": 2,
        "No": 1
    },
    "mobility": {
        "Yes": 2,
        "No": 1
    },
    "management": {
        "Excellent": 4,
        "Good": 3,
        "Average": 2,
        "Poor": 1
    },
    "suggestions": {
        "Very Open": 3,
        "Somewhat Open": 2,
        "Closed to Feedback": 1
    },
    "recommendation": {
        "Highely likely": 4,
        "Likely": 3,
        "Neutral": 2,
        "Unlikely": 1
    }
}

# Apply category mappings
for col, mapping in category_mappings.items():
    df[col] = df[col].map(mapping)

# Compute total score as the sum of mapped numerical columns
df['total_score'] = df[['duration', 'satisfaction', 'workLifeBalance', 'inclusive', 'culture','colleagues','safety','grievances','overtime','compensation','mobility','suggestions',
                        'remote', 'benefits', 'management', 'recommendation']].sum(axis=1)

# Define thresholds for sentiment classification
positive_threshold = df['total_score'].quantile(0.75)  # Top 25% scores as "positive"
negative_threshold = df['total_score'].quantile(0.25)  # Bottom 25% scores as "negative"

# plt.hist(df['total_score'], bins=20, color='blue', alpha=0.7)
# plt.axvline(positive_threshold, color='green', linestyle='dashed', label='Positive Threshold')
# plt.axvline(negative_threshold, color='red', linestyle='dashed', label='Negative Threshold')
# plt.title('Total Score Distribution')
# plt.xlabel('Total Score')
# plt.ylabel('Frequency')
# plt.legend()
# plt.show()

# Generate sentiment labels
df['sentiment'] = df['total_score'].apply(
    lambda x: 'positive' if x >= positive_threshold else ('negative' if x <= negative_threshold else 'neutral')
)
# Check counts for validation
# print(df['sentiment'].value_counts())

# Features and labels
X = df.drop(columns=['sentiment'])  # Drop target column
y = df['sentiment']  # Target column (assumes 'sentiment' is already labeled)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a simple LR Model
model = LogisticRegression( max_iter=100)
model.fit(X_train, y_train)

# Predictions and evaluation
y_pred1 = model.predict(X_test)
print(classification_report(y_test, y_pred1))
acc = accuracy_score(y_test, y_pred1)
print("Logistic Regression model accuracy (in %): " , acc*100) 


# Fit KNN
knn = KNeighborsClassifier(n_neighbors=5)  # Choose k (e.g., 5)
knn.fit(X_train, y_train)

# Predict and evaluate
y_pred2 = knn.predict(X_test)
print(classification_report(y_test, y_pred2))
acc2 = accuracy_score(y_test, y_pred2)
print("KNN model accuracy (in %): " , acc2*100) 


#SVM
svm = SVC(kernel='linear', C=1.0, gamma='scale')  
svm.fit(X_train, y_train)

# Predict and evaluate
y_pred3 = svm.predict(X_test)
print(classification_report(y_test, y_pred3))
acc3 = accuracy_score(y_test, y_pred3)
print("SVM model accuracy (in %): " , acc3*100) 

# # Save the output
# Add predictions to the dataset
#df['predicted_sentiment'] = model.predict(X)
# output_path = r'C:\Users\shrey\Documents\MAJOR PROJECT\Project\careerconnect\output.csv'
# df.to_csv(output_path, index=False)
# print(f"Processed data with sentiment analysis saved to {output_path}")
