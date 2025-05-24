var choice = prompt("Welcome to perimeter calculator./n Please enter your choice./n1 Perimeter of rectangle./n2 Perimeter of square./n3 Perimeter of triangle./n4 Perimeter of circle");

if (choice == '1') {
    var l = prompt('Enter the length')
    var b = prompt('Enter the breadth')
    var result = 2 * (Number(l) + Number(b))
    alert('The perimeter is ' + result)
}
if (choice == '2') {
    var s = prompt('Enter the side')
    var result = 4 * Number(s)
    alert('The perimeter is' + result)
}
if (choice == '3') {
    var s = prompt('Enter the side')
    var result = 3 * Number(s)
    alert('The perimeter is ' + result)
}
if (choice == '4') {
    var r = prompt('Enter the radius')
    var result = 2 * 3.14 * Number(r)
    alert('The perimeter is ' + result)
} 
