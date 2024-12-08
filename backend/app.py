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

if __name__ == '__main__':
    app.run(debug=True)
