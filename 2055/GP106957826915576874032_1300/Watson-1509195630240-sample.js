const testparams = {
  "api_key": "TANMAY_VR_APIKEY_1",
  "imageurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/449px-Cat_November_2010-1a.jpg",
  "url" : "https://sandbox-watson-proxy.mybluemix.net/visual-recognition/api",
  "use_unauthenticated" : false
}

function main(params) {
  return new Promise(function (resolve, reject) {
    const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
    
    var visual_recognition = new VisualRecognitionV3({
      "api_key": params.api_key || "",
      "version_date": "2016-05-20",
      "url" : params.url || "https://gateway-a.watsonplatform.net/visual-recognition/api",
      'use_unauthenticated': params.use_unauthenticated
    });

    visual_recognition.classify({"url": params.imageurl, "classifier_ids": ["dogcat_1904103940"], "threshold": 0.0}, function(err, res) {
      if (err)
        reject(err);
      else
        resolve(res);
    });
  });
}

if (require.main === module)
  main(testparams)
    .then((results) => console.log(JSON.stringify(results, null, 2)))
    .catch((error) => console.log(error.message));

exports.main = main;