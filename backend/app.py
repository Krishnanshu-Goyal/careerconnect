from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import os
from werkzeug.utils import secure_filename

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# MongoDB configuration
client = MongoClient("mongodb://localhost:27017/")
db = client['mydatabase']  # Replace 'mydatabase' with your database name
collection = db['resources']  # Replace 'resources' with your collection name
job_collection = db['job_opportunities']
feedback_collection = db['feedback']


# File upload configuration
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Endpoint to handle resource submission
@app.route('/api/resources', methods=['POST'])
def add_resource():
    try:
        # Get form data
        title = request.form['title']
        description = request.form['description']
        type_ = request.form['type']
        category = request.form['category']
        company = request.form['company']

        # Handle file upload
        if 'file' in request.files:
            file = request.files['file']
            if file.filename != '':
                # Save file securely
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            else:
                return jsonify({"error": "File not uploaded"}), 400
        else:
            return jsonify({"error": "No file provided"}), 400

        # Insert data into MongoDB
        resource_data = {
            "title": title,
            "description": description,
            "type": type_,
            "category": category,
            "company": company,
            "filename": filename  # Save file name/path in the database
        }
        collection.insert_one(resource_data)

        return jsonify({"message": "Resource added successfully!"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/job-opportunities', methods=['POST'])
def add_job_opportunity():
    try:
        # Get form data
        title = request.form['title']
        company = request.form['company']
        type_ = request.form['type']
        field  = request.form['field']
        exp_level = request.form['exp_level']
        link = request.form['link']


        # Insert data into MongoDB
        job_data = {
            "title": title,
            "company": company,
            "type": type_,
            "field": field,
            "exp_level": exp_level,
            "link": link 
        }
        job_collection.insert_one(job_data)

        return jsonify({"message": "Job opportunity added successfully!"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/feedback', methods=['POST'])
def add_feedback():
    try:
        # Get form data
        companyName = request.form['companyName']
        duration = request.form['duration']
        satisfaction = request.form['satisfaction']
        culture  = request.form['culture']
        workLifeBalance = request.form['workLifeBalance']
        inclusive = request.form['inclusive']
        colleagues = request.form['colleagues']
        safety = request.form['safety']
        grievances = request.form['grievances']
        overtime = request.form['overtime']
        remote  = request.form['remote']
        compensation = request.form['compensation']
        mobility = request.form['mobility']
        benefits = request.form['benefits']
        management = request.form['management']
        suggestions = request.form['suggestions']
        recommendation  = request.form['recommendation']
        strengths = request.form['strengths']
        weakness = request.form['weakness']
        additionalAdvice = request.form['additionalAdvice']


        # Insert data into MongoDB
        feedback_data = {
            "companyName": companyName,
            "duration": duration,
            "satisfaction": satisfaction,
            "culture": culture,
            "workLifeBalance": workLifeBalance,
            "inclusive": inclusive, 
            "colleagues": colleagues,
            "safety": safety,
            "grievances": grievances,
            "overtime": overtime,
            "remote": remote,
            "compensation": compensation, 
            "mobility": mobility,
            "benefits": benefits,
            "management": management,
            "suggestions": suggestions,
            "recommendation": recommendation,
            "strengths": strengths,
            "weakness": weakness,
            "additionalAdvice": additionalAdvice  
        }
        feedback_collection.insert_one(feedback_data)

        return jsonify({"message": "Feedback added successfully!"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
