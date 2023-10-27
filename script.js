//1 display number in text box
function display(num) {
    console.log(num);
    result.value += num

}

//2 clear text box
function clearBox() {
    result.value = ""

}

//3 evaluate expression
function calculate() {
    // method 1
    // exp = result.value//eg: exp=1+2
    // output = eval(exp)// output=eval(1+2)=3
    // result.value = output

    // method 2
    result.value = eval(result.value)
}

//4 remove last item from text box
function removeLastitem(){
    currentItem=result.value
    result.value=currentItem.slice(0,-1)
}