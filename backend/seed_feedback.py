from pymongo import MongoClient
from faker import Faker
import random

# MongoDB configuration
client = MongoClient("mongodb://localhost:27017/")
db = client['mydatabase']  # Replace with your database name
feedback_collection = db['feedback']

# Faker instance
fake = Faker()

# Options for dropdowns
companies = ["Thomas Ltd", "Holden-Harrison", "Castillo Inc","Grimes-Garcia", "Willis-Ramirez", "Porter Ltd", "Contreras Ltd" "Green-Ortiz", "Hall-Young", "Dawson Ltd", "Faulkner and Miller", "Buchanan Inc","Nguyen Group","Barton", "Lindsey and Brooks" "Haley-Gonzalez","Martin LLC", "Maddox Ltd","Miller-Carson","Jones-Kelley","Jacobs Ltd","Webb-Reynolds","Fernandez-Hatfield", "Brady and Jackson","Hunt-Williams"]
durations = ["Less than 6 months", "6 months - 1 year", "1-2 years", "2-5 years", "More than 5 years"]
cultures = ["Supportive", "Average", "Competitive", "Toxic"]
work_life_balances = ["Excellent", "Good", "Average", "Poor"]
inclusivities = ["Highly Inclusive", "Moderately Inclusive", "Needs Improvement"]
colleagues = ["Highly Supportive", "Moderately Supportive", "Not very Supportive"]
safeties = ["Very comfortable and safe", "Somewhat comfortable", "Needs improvement"]
grievances = ["Yes", "No", "No Idea"]
overtimes = ["Rarely", "Sometimes", "Frequently"]
yes_no = ["Yes", "No"]
ratings = [1, 2, 3, 4, 5]
managements = ["Excellent", "Good", "Average", "Poor"]
suggestions = ["Very Open", "Somewhat Open", "Closed to Feedback"]
recommend = ["Highely likely","Likely", "Neutral","Unlikely" ]

# Generate random data
def generate_dummy_data(n=500):
    for _ in range(n):
        feedback_data = {
            "companyName": random.choice(companies),
            "duration": random.choice(durations),
            "satisfaction": random.choice(ratings),
            "culture": random.choice(cultures),
            "workLifeBalance": random.choice(work_life_balances),
            "inclusive": random.choice(inclusivities),
            "colleagues": random.choice(colleagues),
            "safety": random.choice(safeties),
            "grievances": random.choice(grievances),
            "overtime": random.choice(overtimes),
            "remote": random.choice(ratings),
            "compensation": random.choice(yes_no),
            "mobility": random.choice(yes_no),
            "benefits": random.choice(ratings),
            "management": random.choice(managements),
            "suggestions": random.choice(suggestions),
            "recommendation": random.choice(recommend),
            "strengths": fake.text(max_nb_chars=100),
            "weakness": fake.text(max_nb_chars=100),
            "additionalAdvice": fake.text(max_nb_chars=150),
        }
        feedback_collection.insert_one(feedback_data)
    print(f"Inserted {n} dummy records into the 'feedback' collection.")

# Generate 500 dummy records
generate_dummy_data()
