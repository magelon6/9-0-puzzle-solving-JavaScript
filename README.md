# 9-0-puzzle-solving-JavaScript

This code defines a function evaluate(expr) that takes a string expr representing a mathematical expression with digits and the plus and minus operators, and returns the result of the expression as an integer. The expression is evaluated by using a stack data structure to keep track of the running total as the characters of the expression are parsed.

The outer part of the code that follows is a nested loop that generates all possible combinations of digits (0-9) and operators (+,-) in order to find the expressions that evaluates to sumNum which is 200.

First, it initializes the variable digits to the string "9876543210" and signs to the array ['', '+', '-']. It then creates a nested array atoms by mapping digits to an array of all possible combinations of digits and signs. This is done by splitting digits into an array of individual characters, and then mapping each digit to an array of the digit concatenated with each sign.

Then it creates a loop with a limit of Math.pow(3, 10) iterations. For each iteration, the current index is converted to a string in base 3 format, padded with zeroes so that it has 10 digits, then split into an array of digits, and finally mapped to an array of integers.
This array indexes would represent a number in base 3 that would correspond to one of the combination of numbers and signs.

For each iteration, the second loop iterates through the 10 digits in the atoms array, and uses the corresponding value from the indexes array to determine which sign to use for that digit. It then concatenates the result to the expr string, which is the expression that the code is trying to evaluate.

Then the expression is passed to the evaluate function to check if it matches the expected sum. If it does it prints the expression and count the number of matches. Finally, it prints the total number of expressions that match the expected sum.

<h1>Математическая головоломка сумма цифр от 9 до 0</h1>

Этот код ищет все возможные комбинации из 10 цифр (0-9) и знаков плюс и минус, с которыми они могут быть соединены, и подсчитывает количество таких комбинаций, которые дают заданную сумму (в данном случае 200).

Для этого сначала объявляется функция evaluate(expr), которая получает на вход математическое выражение в виде строки и вычисляет его значение. Функция использует стек, накапливая в нём значения чисел, и знак операции, который следует за ними.

Затем в основном теле скрипта инициализируется константа sumNum и переменная count со значением 0. Они будут использоваться для хранения искомой суммы и счетчика количества комбинаций с этой суммой.

Затем определяются константы digits, signs, и atoms, которые содержат строку цифрами, строку знаков плюс и минус, и массив из массивов, в каждом из которых находятся соответствующие цифре знаки ('', плюс, минус).

Затем используется цикл for для перебора всех возможных комбинаций индексов знаков, соответствующих цифрам. Для каждой комбинации индексов создается строка с математическим выражением, в котором цифры и знаки соответствуют текущей комбинации индексов.

Далее, используя функцию evaluate(expr), вычисляется значение созданного выражения, и если оно равно искомой сумме (sumNum), то выражение выводится на экран и счетчик count увеличивается на 1.

По окончании цикла выводится сообщение о количестве найденных выражений с искомой суммой.
