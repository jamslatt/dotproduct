$(document).ready(function(){
    function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    }

    $('#submit').click(function(){
        var x1 = $('#x1').val();
        var x2 = $('#x2').val();
        var y1 = $('#y1').val();
        var y2 = $('#y2').val();
        if ( y1 == " " || y2 == " " || x1 == " " || x2 == " ") {
            alert("Enter all coordinate fields.");
        }
        var dot = 0;
        dot = x1 * x2 + y1 * y2;
        $('#dotprot').html("<strong>Dot Product: </strong>" + dot);
        var fMag = pythagorean(x1, y1);
        var sMag = pythagorean(x2, y2);
        var totalMag = fMag + sMag;
        $('#finalangle').html("<strong>Angle between vectors: </strong>" + totalMag);

        return false;

    });
});