// フィボナッチ数の生成
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// output is [0,1,1,2,3,5...]
// n: 生成数
function fibonacciGenerator(n) {
    var fibonacci = [];
    if (n <= 2) {
        if (n > 0) {
            // forループをまわすごとにfibonacciにループした回数を挿入
            for (var i = 0; i < n; i++) {
                fibonacci.push(i);
            }
            console.log(fibonacci);
        } else {
            console.log("正数を入力してください");
        }
    } else {
        for (var i = 0; i < n; i++) {
            // forループをまわすごとにfibonacciにループした回数を挿入
            // output is [0,1]
            if (i < 2) {
                fibonacci.push(i);

                // ex: [0,1,1] -> 2をfibonacciに挿入
            } else {
                var fibonacciNum = fibonacci[i - 2] + fibonacci[i - 1];
                fibonacci.push(fibonacciNum);
            }
        }
        console.log(fibonacci);
    }
}
