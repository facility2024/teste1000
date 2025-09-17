
// Scripts personalizados para funcionalidades avançadas
console.log('Página Beatriz🖤 Latina Cutie carregada com sucesso!');

// Função para analytics personalizado
function trackCustomEvent(eventName, data) {
  console.log('Custom Event:', eventName, data);
  // Adicione aqui sua lógica de analytics
}

// Inicializar eventos personalizados
document.addEventListener('DOMContentLoaded', function() {
  trackCustomEvent('page_loaded', {
    model: 'Beatriz🖤 Latina Cutie',
    timestamp: new Date().toISOString()
  });
});
