$(document).ready(function(){
    function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    }

    $('#submit').click(function(){
        // GET values of the coordinate
        var x1 = $('#x1').val();
        var x2 = $('#x2').val();
        var y1 = $('#y1').val();
        var y2 = $('#y2').val();

        // Debug if value of coordinate is null
        if ( y1 == " " || y2 == " " || x1 == " " || x2 == " ") {
            alert("Enter all coordinate fields.");
        }
        // Calculate the dot Product
        var dot = 0;
        dot = x1 * x2 + y1 * y2;
        $('#dotprot').html("<strong>Dot Product: </strong>" + dot);

        // Find the magnitude of each vector
        var fMag = pythagorean(x1, y1);
        var sMag = pythagorean(x2, y2);
        var totalMag = fMag + sMag;

        // Final calculation for result.
        var angle = dot / totalMag;
        $('#finalangle').html("<strong>Angle between vectors: </strong>" + angle.toFixed(5));
        return false;

    });
});