import React from "react";
import {View, Dimensions, Image, StyleSheet, Text } from "react-native";
import  topo  from "../../../assets/topo.png";
import logo from '../../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Carrinho(){

    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhes do carrinho</Text>
    <View style={estilos.carrinho}>
        <Text style={estilos.nome}>Carrinho de Compras</Text>
        <View style={estilos.fazenda}>
            <Image source={logo}/>
            <Text style={estilos.nome}>Fazenda do Lorde Raul</Text>
        </View>
        <Text style={estilos.nome}>Carrinho de Compras</Text>
        <Text style={estilos.nome}>Uma cesta deliciosa com produtos frescos da melhor fazenda do sudeste!</Text>
        <Text style={estilos.nome}>R$ 40,00</Text>
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
    },
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646"
    },

    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    }
})
