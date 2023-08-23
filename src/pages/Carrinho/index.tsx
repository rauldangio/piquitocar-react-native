import React from "react";
import {View, Dimensions, Image, StyleSheet, Text } from "react-native";
import  topo  from "../../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Carrinho(){

    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes do carrinho</Text>
    <View>
        <Text>Carrinho de Compras</Text>
        <Text>Fazenda do Lorde Raul</Text>
        <Text>Carrinho de Compras</Text>
        <Text>Uma cesta deliciosa com produtos frescos da melhor fazenda do sudeste!</Text>
        <Text>R$ 40,00</Text>
    </View>

    </>
}

const estilos = StyleSheet.create({
    topo: {
        width:"100%",
        height: 578 / 768 * width,
    },
    titulo:{
        width: "100%",
        position: "absolute",
        color: "white",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 26,
        padding: 16,
        fontFamily: "MontserratItalic"
    }
})
