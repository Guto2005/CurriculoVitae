import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

class Curriculum extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Currículo</Text>

        <Image 
          source={{ uri: 'https://th.bing.com/th/id/OIP.V-YHoH2DyDsCilsC78wMowHaEo?rs=1&pid=ImgDetMain' }} 
          style={styles.image}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          <Text style={styles.sectionContent}>
            Nome: Gustavo Duarte {'\n'}
            Endereço: Rua Acre, São Paulo, SP, Brasil {'\n'}
            Telefone: (13) 99190-4047 {'\n'}
            E-mail: gustavo@gpsbr.net
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivo</Text>
          <Text style={styles.sectionContent}>
            Busco uma posição desafiadora como Desenvolvedor de Software onde eu possa aplicar minhas habilidades em desenvolvimento web e mobile, contribuindo para o crescimento da empresa e aprimorando minhas competências técnicas.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          <Text style={styles.sectionContent}>
            Empresa: Tech Solutions {'\n'}
            Cargo: Desenvolvedor Front-End {'\n'}
            Período: Janeiro de 2022 - Presente {'\n'}
            Descrição: Desenvolvimento de interfaces responsivas utilizando React.js, integração com APIs e manutenção de sistemas existentes.
            {'\n\n'}
            Empresa: CodeFactory {'\n'}
            Cargo: Estagiário em Desenvolvimento de Software {'\n'}
            Período: Junho de 2021 - Dezembro de 2021 {'\n'}
            Descrição: Participação no desenvolvimento de aplicações web e mobile, aprendizado de boas práticas de codificação e colaboração em equipe.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Graduações</Text>
          <Text style={styles.sectionContent}>
            Universidade de São Paulo (USP) - Bacharel em Ciência da Computação {'\n'}
            Período: Fevereiro de 2018 - Dezembro de 2021
            {'\n\n'}
            Universidade de São Paulo (USP) - Curso de Extensão em Desenvolvimento Mobile {'\n'}
            Período: Janeiro de 2020 - Julho de 2020
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <Text style={styles.sectionContent}>
            - Desenvolvimento em JavaScript (React.js, Node.js) {'\n'}
            - Programação Mobile (React Native) {'\n'}
            - HTML5, CSS3, JavaScript {'\n'}
            - Git e GitHub {'\n'}
            - SQL(MySQL)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificações e Treinamentos</Text>
          <Text style={styles.sectionContent}>
            Certificação em Desenvolvimento Web - Udacity {'\n'}
            Data: Junho de 2021 {'\n\n'}
            Certificação em Desenvolvimento Mobile - Coursera {'\n'}
            Data: Março de 2020
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos ou Realizações</Text>
          <Text style={styles.sectionContent}>
            Projeto: Plataforma de E-commerce {'\n'}
            Descrição: Desenvolvimento de uma plataforma de e-commerce com React.js e Node.js, incluindo funcionalidades de pagamento e gestão de produtos. {'\n\n'}
            Projeto: Aplicativo de Controle de Finanças {'\n'}
            Descrição: Criação de um aplicativo móvel usando React Native para controle de despesas e planejamento financeiro pessoal.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
          <Text style={styles.sectionContent}>
            - Português - Nativo {'\n'}
            - Inglês - Básico
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  section: {
    width: '100%', // Garante que as seções ocupem toda a largura disponível
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Curriculum;
