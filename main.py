from flask import Flask,render_template, request
app = Flask(__name__)

# create function for covert uppercase
def to_upper_case(input_str):
    '''done by satyam'''
    return input_str.upper()

# create function for covert lowercase
def to_lower_case(input_str):
    '''done by abhyanshu'''
    return input_str.lower()

# create function to remove all spaces
def remove_all_spaces(input_str):
    '''done by suvigya'''
    return input_str.replace(" ","")

# create function to remove all cammas
def remove_all_commas(input_str):
    '''done by abhishek'''
    pass

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=["POST"])
def result():
    if request.method=="POST":
        return render_template('result.html')



if __name__ == '__main__':
   app.run(debug=True)