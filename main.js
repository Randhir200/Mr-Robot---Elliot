function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let t=0;t<tc;t++){
        let n = +input[line++];
        let str = input[line++]
        
        console.log(solve(str, 0, str.length-1));
    }
    
    function solve(str, i, j){
       if(i>j) return "";
       let mid = Math.floor((i+j)/2)
       return str[mid]+solve(str, i, mid-1) + solve(str,mid+1,j)
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  