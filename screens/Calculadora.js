import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

function Calculadora() {

    const [totalValue, setTotalValue] = useState(``);
    const [memory, setMemory] = useState(0);

    function show(value) {
        const oldValue = totalValue;
        const newValue = oldValue + value;
        setTotalValue(newValue);
        if (newValue == '.') {
            setTotalValue('0.')
        }
    }

    function clear() {
        setTotalValue(``);
    }

    function backspace() {
        const valueDelete = totalValue.substring(0, (totalValue.length - 1));
        setTotalValue(valueDelete);

    }

    function result() {
        const verify = totalValue.charAt(totalValue.length - 1);
        if ((totalValue).indexOf("^") != -1) {
            const pow = totalValue.split("^");
            setTotalValue(Math.pow(pow[0], pow[1]));
            setMemory(eval(Math.pow(pow[0], pow[1])));

        } else {
            switch (verify) {
                case '^':
                case '+':
                case '-':
                case '/':
                case '*':
                case '(':
                    setTotalValue('Operação Inválida');
                    break;
                default:
                    setTotalValue(eval(totalValue));
                    setMemory(eval(totalValue));
            }

        }
    }

    function raizQuadrada() {
        const result = Math.sqrt(totalValue);
        setTotalValue(result);
    }

    function inverted() {
        setTotalValue(-1 * totalValue);
    }

    return (
        <View style={styles.container}>
            <View style={styles.parentDisplay}>
                <Text style={styles.textDisplay}>{totalValue}</Text>
            </View>
            <View style={styles.parent}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell} onPress={clear}>
                        <View>
                            <Text style={styles.textClean}>C</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("1") }}>
                        <View>
                            <Text style={styles.text}>1</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("4") }}>
                        <View>
                            <Text style={styles.text}>4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("7") }}>
                        <View>
                            <Text style={styles.text}>7</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show(".") }}>
                        <View>
                            <Text style={styles.text}>.</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("^") }}>
                        <View>
                            <Text style={styles.textOperations}>^</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("2") }}>
                        <View>
                            <Text style={styles.text}>2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("5") }}>
                        <View>
                            <Text style={styles.text}>5</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("8") }}>
                        <View>
                            <Text style={styles.text}>8</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("0") }}>
                        <View>
                            <Text style={styles.text}>0</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell} onPress={raizQuadrada}>
                        <View>
                            <Text style={styles.textOperations}>√</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("3") }}>
                        <View>
                            <Text style={styles.text}>3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("6") }}>
                        <View>
                            <Text style={styles.text}>6</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("9") }}>
                        <View>
                            <Text style={styles.text}>9</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={result}>
                        <View>
                            <Text style={styles.textOperations}>=</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell} onPress={() => { show(memory) }}>
                        <View>
                            <Text style={styles.textOperations}>M</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("+") }}>
                        <View>
                            <Text style={styles.textOperations}>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("-") }}>
                        <View>
                            <Text style={styles.textOperations}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("/") }}>
                        <View>
                            <Text style={styles.textOperations}>/</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("*") }}>
                        <View>
                            <Text style={styles.textOperations}>*</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell} onPress={backspace}>
                        <View>
                            <Text style={styles.textOperations}><Icon name='ios-backspace' size={20} /></Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show("(") }}>
                        <View>
                            <Text style={styles.textTrig}>(</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={() => { show(")") }}>
                        <View>
                            <Text style={styles.textTrig}>)</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cell} onPress={inverted}>
                        <View>
                            <Text style={styles.textOperations}>+/-</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

}
export default Calculadora;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    parent: {
        flex: 2,
        padding: 2,
        flexDirection: 'row',
    },
    row: {
        flex: 1,
        flexDirection: 'column',
    },
    cell: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 40,
        color: "#000000"
    },
    textClean: {
        fontSize: 40,
        color: "#EE8618",
        fontWeight: 'bold'
    },
    parentDisplay: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    textDisplay: {
        fontSize: 70,
        fontWeight: 'bold',
    },
    textTrig: {
        fontSize: 20,
        color: "#189DEE",
        fontWeight: 'bold',
    },

    textOperations: {
        fontSize: 20,
        color: "#189DEE",
        fontWeight: 'bold',
    }
});