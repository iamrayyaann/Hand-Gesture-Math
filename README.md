# Hand Gesture Math Operations

## Project Overview

Hand Gesture Math Operations is a web-based application that allows users to perform basic mathematical operations (addition and subtraction) using hand gestures. The application uses the webcam to capture images of hand gestures representing numbers and processes these images to perform the selected mathematical operation. The result is then displayed on the web page.

## Features

- **Start Camera**: Activates the webcam to capture live video.
- **Capture Images**: Allows users to take snapshots of hand gestures for input.
- **Process Images**: Performs mathematical operations based on the captured images.
- **Results Display**: Shows the result of the operation on the web page.

## Installation

### Prerequisites

- Python 3.x
- Flask
- JavaScript and CSS files for front-end

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/iamrayyaann/hand-gesture-math.git
   cd hand-gesture-math
   ```
   2. **Create and Activate a Virtual Environment**

   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows use .venv\Scripts\activate
   ```

3. **Install Dependencies**

   Create a `requirements.txt` file with the following content:

   ```plaintext
   Flask==2.0.3
   ```

   Then, install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Application**

   Make sure you are in the root directory of the project and start the Flask application:

   ```bash
   flask run
   ```

   The application will be accessible at `http://127.0.0.1:5000`.

## Usage
1. **Homepage** 

   ![Add](https://github.com/user-attachments/assets/7ffceecb-1568-431e-8d1c-e9493d4cd88a)

2. **Start the Camera**

   Click the "Start Camera" button to activate the webcam and start capturing live video.
   
   ![Add Camera](https://github.com/user-attachments/assets/64d1b91b-e8b7-4fbf-bb44-fdbfcad33080)

4. **Capture Hand Gestures**

   - Click "Capture First Image" to take a snapshot of the first hand gesture.
   - Click "Capture Second Image" to take a snapshot of the second hand gesture.
   
   ![Add N1](https://github.com/user-attachments/assets/aa78d991-af5a-4ee3-a620-6677daaca9de)
   ![Add N2](https://github.com/user-attachments/assets/d1c878de-cbbc-4bf8-ad70-f8e85e13c535)

5. **Select Operation**

   Use the dropdown menu to select either "Add" or "Subtract".

6. **Process Images**

   Click "Process Images" to perform the selected mathematical operation based on the number of fingers shown in the captured images.

7. **View Results**

   The result of the mathematical operation will be displayed below the captured images.
   
   ![Add Result](https://github.com/user-attachments/assets/a058f0aa-69d5-4382-a63e-8695f80e90ee)

## Project Structure

- `app/`
  - `main.py`: The main Flask application file.
- `static/`
  - `style.css`: CSS file for styling the web page.
  - `script.js`: JavaScript file for handling front-end functionality.
- `templates/`
  - `index.html`: HTML file for the web page layout.
- `requirements.txt`: Python package dependencies.