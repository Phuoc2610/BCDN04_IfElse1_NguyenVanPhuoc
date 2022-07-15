/**
 * Khối 1: input
 * a : số nguyên 1
 * b : số nguyên 2
 * c : số nguyên 3
 * ketQua 
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnNum").onclick = function () {
    var a = parseInt(document.getElementById("inputNum1").value);
    var b = parseInt(document.getElementById("inputNum2").value);
    var c = parseInt(document.getElementById("inputNum3").value);
    var ketQua = 0;
    console.log(a, b, c);

    if (a > b && b > c) {
        // console.log(c, b, a);
        ketQua = c + "<" + b + "<" + a;

    } else if (a > c && c > b) {
        // console.log(b, c, a);
        ketQua = b + "<" + c + "<" + a;

    } else if (b > a && a > c) {
        // console.log(c, a, b);
        ketQua = c + "<" + a + "<" + b;

    } else if (b > c && c > a) {
        // console.log(a, c, b);
        ketQua = a + "<" + c + "<" + b;

    } else if (c > b && b > a) {
        // console.log(a, b, c);
        ketQua = a + "<" + b + "<" + c;

    } else {
        // console.log(b, a, c);
        ketQua = b + "<" + a + "<" + c;
    }
    document.getElementById("txtNum").innerHTML = ketQua;

}

/**
 * Khối 1: input
 * who : ai đang xử dụng
 * loiChao
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * loiChao
 */
document.getElementById("btnWho").onclick = function () {
    var who = document.getElementById("inputWho").value;
    var loiChao = 0;
    if (who == "Bố" || who == "B") {
        loiChao = "Xin chào bố";
    } else if (who == "Mẹ" || who == "M") {
        loiChao = "xin chào mẹ";
    } else if (who == "anh Trai" || who == "A") {
        loiChao = "xin chào anh trai";
    } else if (who == "em Gái" || who == "E") {
        loiChao = "xin chào em gái";
    } else {
        loiChao = "xin vui lòng nhập đúng cú pháp: Bố(B),Mẹ(M),anh Trai(A),em Gái(E)";
    }
    document.getElementById("txtWho").innerHTML = loiChao;
}

/**
 * Khối 1: input
 * soNguyen1
 * soNguyen2
 * soNguyen3
 * ketQua
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: lập ra các TH có thể xảy ra
 * B3: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnSoNguyen").onclick = function () {
    var soNguyen1 = parseInt(document.getElementById("SoNguyen1").value);
    var soNguyen2 = parseInt(document.getElementById("SoNguyen2").value);
    var soNguyen3 = parseInt(document.getElementById("SoNguyen3").value);
    var ketQua = 0;
    console.log(soNguyen1, soNguyen2, soNguyen3);
    if (soNguyen1 % 2 == 0 && soNguyen2 % 2 == 0 && soNguyen3 % 2 == 0) {
        ketQua = "có 3 số chẵn:" + soNguyen1 + "," + soNguyen2 + "," + soNguyen3;
    } else if (soNguyen1 % 2 == 0 && soNguyen2 % 2 == 0) {
        ketQua = "có 2 số chẵn:" + soNguyen1 + "," + soNguyen2 + " <br>có 1 số lẻ:" + soNguyen3;
    } else if (soNguyen1 % 2 == 0 && soNguyen3 % 2 == 0) {
        ketQua = "có 2 số chẵn:" + soNguyen1 + "," + soNguyen3 + " <br>có 1 số lẻ:" + soNguyen2;
    } else if (soNguyen2 % 2 == 0 && soNguyen3 % 2 == 0) {
        ketQua = "có 2 số chẵn:" + soNguyen2 + "," + soNguyen3 + " <br>có 1 số lẻ:" + soNguyen1;
    } else if (soNguyen1 % 2 == 0) {
        ketQua = "có 1 số chẵn:" + soNguyen1 + " <br>có 2 số lẻ:" + soNguyen2 + "," + soNguyen3;
    } else if (soNguyen2 % 2 == 0) {
        ketQua = "có 1 số chẵn:" + soNguyen2 + " <br>có 2 số lẻ:" + soNguyen1 + "," + soNguyen3;
    } else if (soNguyen3 % 2 == 0) {
        ketQua = "có 1 số chẵn:" + soNguyen3 + " <br>có 2 số lẻ:" + soNguyen1 + "," + soNguyen2;
    } else {
        ketQua = "có 3 số lẻ:" + soNguyen1 + "," + soNguyen2 + "," + soNguyen3;
    }
    document.getElementById("txtSoNguyen").innerHTML = ketQua;
}

/**
 * Khối 1: input
 * a : cạnh 1
 * b : cạnh 2
 * c : cạnh 3
 * ketQua
 * 
 * Khối 2: các bước xử lý
 * B1: tìm thẻ html và lấy giá trị
 * B2: nếu a == b && b == c
 * => ketQua = "tam giác đều"
 * B3: nếu (a == b) || (b == c) || (a == c)
 * => ketQua = "tam giác cân";
 * B4: nếu (a * a == b * b + c * c)
 * => ketQua = "tam giác vuông"
 * B5: hiển thị lên UI
 * 
 * Khối 3: output
 * ketQua
 */
document.getElementById("btnKetQua").onclick = function () {
    var a = parseInt(document.getElementById("inputCanh1").value);
    var b = parseInt(document.getElementById("inputCanh2").value);
    var c = parseInt(document.getElementById("inputCanh3").value);
    var ketQua = 0;
    // console.log(a, b, c);

    if (a == b && b == c) {
        ketQua = "tam giác đều";
    } else if ((a == b) || (b == c) || (a == c)) {
        ketQua = "tam giác cân";
    } else if ((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b)) {
        ketQua = "tam giác vuông";
    } else {
        ketQua = "tam giác khác";
    }
    document.getElementById("txtKetQua").innerHTML = ketQua;
}





