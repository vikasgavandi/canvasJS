<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overlay Images on Background</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <style>
    #canvas {
      border: 1px solid black;
      display: block;
      margin: 20px auto;
    }
  </style>
</head>

<body>
  <div class="container my-4">
    <div class="row mb-3">
      <div class="col-md-6">
        <input type="file" id="upload1" accept="image/*" class="form-control mb-2">
        <div class="input-group mb-2">
          <span class="input-group-text">X:</span>
          <input type="number" id="x1" class="form-control" value="50" min="0" max="800">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text">Y:</span>
          <input type="number" id="y1" class="form-control" value="50" min="0" max="600">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text">Width:</span>
          <input type="number" id="width1" class="form-control" value="100" min="1">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text">Height:</span>
          <input type="number" id="height1" class="form-control" value="100" min="1">
        </div>
      </div>
      <div class="col-md-6">
        <input type="file" id="upload2" accept="image/*" class="form-control mb-2">
        <div class="input-group mb-2">
          <span class="input-group-text">X:</span>
          <input type="number" id="x2" class="form-control" value="200" min="0" max="800">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text">Y:</span>
          <input type="number" id="y2" class="form-control" value="200" min="0" max="600">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text">Width:</span>
          <input type="number" id="width2" class="form-control" value="100" min="1">
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text">Height:</span>
          <input type="number" id="height2" class="form-control" value="100" min="1">
        </div>
      </div>
    </div>
    <div class="text-center">
      <button id="download" class="btn btn-primary">Download Image</button>
    </div>
  </div>
  <canvas id="canvas" width="1080" height="1527"></canvas>

  <script>
    window.onload = function () {
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      var upload1 = document.getElementById('upload1');
      var upload2 = document.getElementById('upload2');
      var x1Input = document.getElementById('x1');
      var y1Input = document.getElementById('y1');
      var width1Input = document.getElementById('width1');
      var height1Input = document.getElementById('height1');
      var x2Input = document.getElementById('x2');
      var y2Input = document.getElementById('y2');
      var width2Input = document.getElementById('width2');
      var height2Input = document.getElementById('height2');
      var downloadButton = document.getElementById('download');
      var backgroundImage = new Image();
      var userImage1 = null;
      var userImage2 = null;

      // Load the background image
      backgroundImage.src = './images/poster2.png';
      backgroundImage.onload = function () {
        drawCanvas();
      };

      // Function to draw the canvas
      function drawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        if (userImage1) {
          ctx.drawImage(
            userImage1,
            parseInt(x1Input.value),
            parseInt(y1Input.value),
            parseInt(width1Input.value),
            parseInt(height1Input.value)
          );
        }
        if (userImage2) {
          ctx.drawImage(
            userImage2,
            parseInt(x2Input.value),
            parseInt(y2Input.value),
            parseInt(width2Input.value),
            parseInt(height2Input.value)
          );
        }
      }

      // Handle first user image upload
      upload1.addEventListener('change', function (e) {
        var reader = new FileReader();
        reader.onload = function (event) {
          userImage1 = new Image();
          userImage1.src = event.target.result;
          userImage1.onload = function () {
            drawCanvas();
          };
        };
        reader.readAsDataURL(e.target.files[0]);
      });

      // Handle second user image upload
      upload2.addEventListener('change', function (e) {
        var reader = new FileReader();
        reader.onload = function (event) {
          userImage2 = new Image();
          userImage2.src = event.target.result;
          userImage2.onload = function () {
            drawCanvas();
          };
        };
        reader.readAsDataURL(e.target.files[0]);
      });

      // Redraw canvas when input values change
      [x1Input, y1Input, width1Input, height1Input, x2Input, y2Input, width2Input, height2Input].forEach(input => {
        input.addEventListener('input', drawCanvas);
      });

      // Download the canvas as an image
      downloadButton.addEventListener('click', function () {
        var link = document.createElement('a');
        link.download = 'canvas-image.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    };
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>


              <!-- <div class="form-group row">
                    <label for="inputPassword" class="col-sm-3 col-form-label"><i class="fa fa-check-circle-o icons"></i>Brand Logo's*</label>
                    <div class="col-sm-9">
                        
                        <select name="channel" id="channel">
                            <option value="#">Select Brand Logo</option>
                        <option value="exceraft.png">Exceraft</option>
                            <option value="deltone.png">Deltone</option>
                            <option value="freego.png">Freego</option>
                           
                        </select>
                    </div>
                </div> -->
