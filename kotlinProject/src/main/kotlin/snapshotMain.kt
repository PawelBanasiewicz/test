package org.example

fun main() {
    val unusedName: String = "unused name"
    var unusedAge: Int = 69

    function(2,3)
    functionTwo(0.00)

}

fun function(a: Int, b: Int) {
    val c = a / 0

    if (true) {
        if (true) {
            if (true) {
                println(b)
            }
        }
    }
}

fun functionTwo(a: Double) {
    println("didn't use variable")
}

class UnusedClass {
    var brand: String = ""
    var price: Double = 1.25
}