Webcam.set({
    width:470,
    height:450,
    image_format:"png",
    png_quality:90
    })
    
    Webcam.attach("#webcamara");
    
    function take_snapshot(){
        console.log("your are in side snapshot")
        Webcam.snap(function(data_uri) {
            console.log("you are in data_uri.")
            document.getElementById("webshot").innerHTML="<img id='capimg' src='"+data_uri+"'>";
        })
    };
    
    console.log('ml5 version', ml5.version);
    
    //classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YwUVeDCj_/model.json",modelLoaded);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0S3gA75eT/model.json",modelLoaded);
    function modelLoaded(){
        console.log("model loaded")
    }
    function check(){
        img= document.getElementById('capimg');
        classifier.classify(img, gotResult);
    }
    function gotResult( error, results){
    if (error){
        console.log(error)
    }
    else {
        console.log(results)
        document.getElementById("object name").innerHTML= results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)*100 +'%'
    }
    }
    
    