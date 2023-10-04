import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

import Topo from './components/Topo';
import Detalhe from "./components/Detalhe";

import carrinho from '../../mocks/carrinho';

export default function Carrinho() {
    return(
    <>
        <Topo titulo={carrinho.topo.titulo}/>
        <View style={style.carrinho}>
        <Detalhe nome={carrinho.detalhes.nome}
         nomeFazenda={carrinho.detalhes.nomeFazenda}
         descricao={carrinho.detalhes.descricao}
         preco={carrinho.detalhes.preco}
         botao={carrinho.detalhes.botao}
         />
    </View>
    </>
    )
}

const style = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

})
