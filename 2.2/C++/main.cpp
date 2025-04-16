#include <iostream>
#include "Symbols.h"
#include "Numbers.h"

int main() {
    std::string inputSymbol = "!#;!%$#%^&*(#)_+|#~`";
    std::string inputNumber = "019473608702638495";

    Symbols objSym(inputSymbol);
    objSym.Replace();

    Numbers objNum(inputNumber);
    objNum.Replace();

    std::cout << "symbols value: " << objSym.GetValue() << std::endl;
    std::cout << "symbols length: " << objSym.GetLength() << std::endl;

    std::cout << "numbers value: " << objNum.GetValue() << std::endl;
    std::cout << "numbers length: " << objNum.GetLength() << std::endl;

    return 0;
}
