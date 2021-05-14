import flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import tensorflow as tf
from tensorflow import keras

generator = keras.models.load_model('./Generator.h5')

app = flask.Flask(__name__)
app.config["DEBUG"] = True

CORS(app)


@app.route('/api', methods=['GET'])
def home():
  if 'id' in request.args:
    id = int(request.args['id'])
  # seed = tf.random.normal([32,100])
  response = jsonify(id)
  return response

app.run()