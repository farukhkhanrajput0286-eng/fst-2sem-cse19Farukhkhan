function calculate(){

    var name=document.getElementById("name").value;
    var roll=document.getElementById("roll").value;

    var m1=Number(document.getElementById("math").value);
    var m2=Number(document.getElementById("web").value);
    var m3=Number(document.getElementById("ai").value);
    var m4=Number(document.getElementById("ds").value);
    var m5=Number(document.getElementById("elc").value);

    if(name=="" || roll==""){
        alert("Please enter name and roll number");
        return;
    }

    var total=m1+m2+m3+m4+m5;
    var percentage=total/5;

    var grade="";
    var result="";
    var remark="";

    if(m1<33 || m2<33 || m3<33 || m4<33 || m5<33){
        result="FAIL";
        grade="F";
        remark="Need More Practice";
    }
    else{

        result="PASS";

        if(percentage>=90){
            grade="A+";
            remark="Outstanding!";
        }

        else if(percentage>=80){
            grade="A";
            remark="Excellent!";
        }

        else if(percentage>=70){
            grade="B";
            remark="Very Good!";
        }

        else if(percentage>=60){
            grade="C";
            remark="Good!";
        }

        else if(percentage>=50){
            grade="D";
            remark="Average!";
        }

        else{
            grade="E";
            remark="Keep Improving!";
        }

    }

    var marks=[m1,m2,m3,m4,m5];
    var subjects=["Mathematics","web designing workshop","Artificial intelligence","Data structure using c++","Electronics"];

    var highest=marks[0];
    var lowest=marks[0];
    var best=subjects[0];
    var weak=subjects[0];

    for(var i=1;i<marks.length;i++){

        if(marks[i]>highest){
            highest=marks[i];
            best=subjects[i];
        }

        if(marks[i]<lowest){
            lowest=marks[i];
            weak=subjects[i];
        }

    }

    var color;

    if(result=="PASS")
        color="green";
    else
        color="red";

    document.getElementById("result").innerHTML=
    "<h3>Student Report</h3>"+
    "<b>Name :</b> "+name+"<br><br>"+
    "<b>Roll No :</b> "+roll+"<br><br>"+
    "<b>Total :</b> "+total+"/500<br><br>"+
    "<b>Percentage :</b> "+percentage.toFixed(2)+"%<br><br>"+
    "<b>Grade :</b> "+grade+"<br><br>"+
    "<b>Result :</b> <span style='color:"+color+"'>"+result+"</span><br><br>"+
    "<b>Best Subject :</b> "+best+" ("+highest+")<br><br>"+
    "<b>Weak Subject :</b> "+weak+" ("+lowest+")<br><br>"+
    "<b>Teacher Remark :</b> "+remark;

}

function resetForm(){

    document.getElementById("name").value="";
    document.getElementById("roll").value="";
    document.getElementById("math").value="";
    document.getElementById("web ").value="";
    document.getElementById("ai").value="";
    document.getElementById("ds").value="";
    document.getElementById("elc").value="";

    document.getElementById("result").innerHTML="";
}