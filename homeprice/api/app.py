from flask import Flask
import joblib
import json 
import numpy as np
from flask import jsonify, request,make_response


HomePrice = ""
#load file
loaded_model = joblib.load("house_predictor_model.pkl")
app = Flask(__name__)
print("testing")

@app.route('/api/hello', methods=['GET'])
def hello_world():
   
    return jsonify("Hello World!")


@app.route('/api/homeData', methods=['POST'])
def POSTHomeData():
    data = request.get_json()
    message = data.get('message', '')
    HomePrice  = predictData(message)
    print(type(HomePrice), "testing")
    response_data = {
        'success': True,
        'message': f'Price : {HomePrice}'
    }
    return jsonify(response_data)



def predictData(array):
    homeData= []
    for i in range(len(array)):
        homeData.append(int(array[i]))
    print(homeData)
    input = np.array(homeData).reshape(1,-1)
    pred = loaded_model.predict(input)
    Formatted_number = f"{pred[0]:,.2f}"
    HomePrice = str(Formatted_number) 
    print(HomePrice)
    return HomePrice
    

if __name__ == '__main__':
    app.run(port=5328)