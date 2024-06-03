# Documentação de Casos de Uso

## Índice

1. [Visão Geral](#visão-geral)
2. [Casos de Uso](#casos-de-uso)
   1. [UC1: Visualizar Build](#uc1-visualizar-build)
   2. [UC2: Criar Build](#uc2-criar-build)
   3. [UC3: Favoritar Build](#uc3-favoritar-build)
   4. [UC4: Rankear Build](#uc4-rankear-build)
   5. [UC5: Comentar em Build](#uc5-comentar-em-build)
   6. [UC6: Responder Comentário](#uc6-responder-comentário)
   7. [UC7: Editar Comentário](#uc7-editar-comentário)
   8. [UC8: Deletar Comentário](#uc8-deletar-comentário)

---

## Visão Geral

Este documento descreve os principais casos de uso do sistema de compartilhamento de builds de Ragnarok. O objetivo do sistema é permitir que os usuários visualizem, criem, favoritem, rankeiem e comentem builds de forma centralizada e organizada.

## Casos de Uso

### UC1: Visualizar Build

**Ator Principal**: Visualizador, Criador de Builds

**Descrição**: O usuário pode visualizar detalhes de uma build, incluindo árvore de habilidades, equipamentos, status, e anotações.

**Pré-condições**: A build deve existir no sistema.

**Fluxo Principal**:
1. O usuário acessa a página principal do site.
2. O usuário procura a build desejada usando a barra de pesquisa ou navegando pelas categorias.
3. O usuário clica na build para visualizar os detalhes.
4. O sistema exibe a árvore de habilidades, os equipamentos (organizados por Early, Mid, e End Game), os status necessários e as anotações da build.

**Pós-condições**: O usuário visualiza os detalhes da build.

### UC2: Criar Build

**Ator Principal**: Criador de Builds

**Descrição**: O criador de builds pode criar uma nova build, preenchendo as informações necessárias.

**Pré-condições**: O usuário deve estar autenticado como criador de builds.

**Fluxo Principal**:
1. O criador de builds faz login no sistema.
2. O criador de builds acessa a seção de criação de builds.
3. O criador de builds preenche o título, descrição, árvore de habilidades, equipamentos para cada camada (Early, Mid, End Game), status necessários e anotações.
4. O criador de builds submete a build.
5. O sistema salva a build e a disponibiliza para visualização.

**Pós-condições**: A nova build é salva e disponibilizada para visualização.

### UC3: Favoritar Build

**Ator Principal**: Criador de Builds

**Descrição**: O criador de builds pode favoritar uma build para acesso rápido futuro.

**Pré-condições**: O usuário deve estar autenticado.

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário visualiza uma build.
3. O usuário clica no botão de favoritar.
4. O sistema salva a build como favorita para o usuário.

**Pós-condições**: A build é marcada como favorita para o usuário.

### UC4: Rankear Build

**Ator Principal**: Criador de Builds

**Descrição**: O criador de builds pode dar uma nota (de 1 a 5 estrelas) para uma build.

**Pré-condições**: O usuário deve estar autenticado.

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário visualiza uma build.
3. O usuário seleciona uma nota de 1 a 5 estrelas.
4. O sistema salva a nota dada pelo usuário.

**Pós-condições**: A nota é salva e a build é rankeada.

### UC5: Comentar em Build

**Ator Principal**: Criador de Builds

**Descrição**: O criador de builds pode comentar em uma build.

**Pré-condições**: O usuário deve estar autenticado.

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário visualiza uma build.
3. O usuário escreve um comentário e o submete.
4. O sistema salva o comentário associado à build.

**Pós-condições**: O comentário é salvo e exibido na build.

### UC6: Responder Comentário

**Ator Principal**: Criador de Builds

**Descrição**: O criador de builds pode responder a um comentário em uma build.

**Pré-condições**: O usuário deve estar autenticado.

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário visualiza uma build com um comentário.
3. O usuário escreve uma resposta ao comentário e a submete.
4. O sistema salva a resposta associada ao comentário original.

**Pós-condições**: A resposta ao comentário é salva e exibida na build.

### UC7: Editar Comentário

**Ator Principal**: Criador de Builds

**Descrição**: O criador de builds pode editar seus próprios comentários.

**Pré-condições**: O usuário deve estar autenticado e ser o autor do comentário.

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário visualiza uma build com seu próprio comentário.
3. O usuário clica no botão de editar comentário.
4. O usuário edita o comentário e o submete.
5. O sistema atualiza o comentário.

**Pós-condições**: O comentário é atualizado.

### UC8: Deletar Comentário

**Ator Principal**: Criador de Builds

**Descrição**: O criador de builds pode deletar seus próprios comentários.

**Pré-condições**: O usuário deve estar autenticado e ser o autor do comentário.

**Fluxo Principal**:
1. O usuário faz login no sistema.
2. O usuário visualiza uma build com seu próprio comentário.
3. O usuário clica no botão de deletar comentário.
4. O sistema remove o comentário.

**Pós-condições**: O comentário é deletado.

---