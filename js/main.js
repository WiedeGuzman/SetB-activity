function Evaluate()
{
    var math = document.getElementById("math").value;
    var mathEval = document.getElementById("mathEval");
    
    if (math >= 90 && math <= 100){
        mathEval.textContent = "Excellent";
    }
    else if (math >= 80 && math <=89){
        mathEval.textContent = "Good";
    }
    else if (math >= 70 && math <=79){
        mathEval.textContent = "Average";
    }
    else if (math >= 60 && math <=69){
        mathEval.textContent = "Poor";
    }
    else if (math <=59){
        mathEval.textContent = "Fail";
    }



    var sci = document.getElementById("sci").value;
    var sciEval = document.getElementById("sciEval");

    if (sci >= 90 && sci <= 100){
        sciEval.textContent = "Excellent";
    }
    else if (sci >= 80 && sci <=89){
        sciEval.textContent = "Good";
    }
    else if (sci >= 70 && sci <=79){
        sciEval.textContent = "Average";
    }
    else if (sci >= 60 && sci <=69){
        sciEval.textContent = "Poor";
    }
    else if (sci <=59){
        sciEval.textContent = "Fail";
    }



    var eng = document.getElementById("eng").value;
    var engEval = document.getElementById("engEval");

    if (eng >= 90 && eng <= 100){
        engEval.textContent = "Excellent";
    }
    else if (eng >= 80 && eng <=89){
        engEval.textContent = "Good";
    }
    else if (eng >= 70 && eng <=79){
        engEval.textContent = "Average";
    }
    else if (eng >= 60 && eng <=69){
        engEval.textContent = "Poor";
    }
    else if (eng <=59){
        engEval.textContent = "Fail";
    }


    var fil = document.getElementById("fil").value;
    var filEval = document.getElementById("filEval");

    if (fil >= 90 && fil <= 100){
        filEval.textContent = "Excellent";
    }
    else if (fil >= 80 && fil <=89){
        filEval.textContent = "Good";
    }
    else if (fil >= 70 && fil <=79){
        filEval.textContent = "Average";
    }
    else if (fil >= 60 && fil <=69){
        filEval.textContent = "Poor";
    }
    else if (fil <=59){
        filEval.textContent = "Fail";
    }


    var pe = document.getElementById("pe").value;
    var peEval = document.getElementById("peEval");

    if (pe >= 90 && pe <= 100){
        peEval.textContent = "Excellent";
    }
    else if (pe >= 80 && pe <=89){
        peEval.textContent = "Good";
    }
    else if (pe >= 70 && pe <=79){
        peEval.textContent = "Average";
    }
    else if (pe >= 60 && pe <=69){
        peEval.textContent = "Poor";
    }
    else if (pe <=59){
        peEval.textContent = "Fail";
    }


    var rank = document.getElementById("rank");
    if (math >= 90 && math <= 100 && sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100 && fil >= 90 && fil <= 100 && pe >= 90 && pe <= 100){
        rank.textContent = "Top Honor Students";
    }
    else if (math >= 90 && math <= 100 && sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100 && fil >= 90 && fil <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (eng >= 90 && eng <= 100 && fil >= 90 && fil <= 100 && pe >= 90 && pe <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (fil >= 90 && fil <= 100 && pe >= 90 && pe <= 100 && math >= 90 && math <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (pe >= 90 && pe <= 100 && math >= 90 && math <= 100 && sci >= 90 && sci <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (math >= 90 && math <= 100 && sci >= 90 && sci <= 100 && fil >= 90 && fil <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100 && pe >= 90 && pe <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (eng >= 90 && eng <= 100 && pe >= 90 && pe <= 100 && math >= 90 && math <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (fil >= 90 && fil <= 100 && math >= 90 && math <= 100 && sci >= 90 && sci <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (pe >= 90 && pe <= 100 && sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (math >= 90 && math <= 100 && eng >= 90 && eng <= 100 && fil >= 90 && fil <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (sci >= 90 && sci <= 100 && fil >= 90 && fil <= 100 && pe >= 90 && pe <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (math >= 90 && math <= 100 && sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100 && fil >= 90 && fil <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100 && fil >= 90 && fil <= 100 && pe >= 90 && pe <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (eng >= 90 && eng <= 100 && fil >= 90 && fil <= 100 && pe >= 90 && pe <= 100 && math >= 90 && math <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (fil >= 90 && fil <= 100 && pe >= 90 && pe <= 100 && math >= 90 && math <= 100 && sci >= 90 && sci <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if (pe >= 90 && pe <= 100 && math >= 90 && math <= 100 && sci >= 90 && sci <= 100 && eng >= 90 && eng <= 100){
        rank.textContent = "Second Honorable Student";
    }
    else if(math >= 0 && math <= 69 && sci >= 0 && sci <= 69 && eng >= 0 && eng <= 69 && fil >= 0 && fil <= 69 && pe >= 0 && pe <= 69){
        rank.textContent = "Repeater";
    }
    else {
        rank.textContent = "No Rank";
    }

}
