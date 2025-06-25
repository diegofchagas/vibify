// // api.js
// import axios from 'axios';

// // Acessa a URL da API da variável de ambiente (correto para Vite)
// const API_BASE_URL = import.meta.env.VITE_API_URL;

// // --- Função para buscar artistas ---
// const fetchArtists = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/artists`);
//     console.log('Artistas buscados:', response.data); // Para depuração
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar artistas:", error);
//     // Em um ambiente de produção, considere um fallback ou uma notificação ao usuário
//     return []; // Retorna um array vazio em caso de erro para evitar quebrar a app
//   }
// };

// // --- Função para buscar músicas ---
// const fetchSongs = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/songs`);
//     console.log('Músicas buscadas:', response.data); // Para depuração
//     return response.data;
//   } catch (error) {
//     console.error("Erro ao buscar músicas:", error);
//     return []; // Retorna um array vazio em caso de erro
//   }
// };

// // --- Executa as funções e exporta os resultados (usando Top-Level Await) ---
// // Estas promessas serão resolvidas antes que qualquer módulo que importe 'api.js' possa usar 'artistArray'/'songsArray'.
// export const artistArray = await fetchArtists();
// export const songsArray = await fetchSongs();

// // Se você tiver outras operações que retornam Promise e quer exportar, faça similar:
// // export const someOtherData = await fetchSomeOtherData();

