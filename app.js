/* ==========================================================================
   APP DATA SOURCE (PRODUCTS, UNITS, BLOGS)
   ========================================================================== */

const PROVISORIA_IMG  = 'assets/provisoria.png';
const PROVISORIA2_IMG = 'assets/provisoria2.png';

const PRODUCTS_DATA = [
  // Granéis
  { id: 1,  category: 'graneis',      name: 'Castanha do Pará Inteira',         desc: 'Castanhas selecionadas, ricas em selênio, fibras e gorduras boas para o coração.',                                                          price: 'R$ 89,90/kg', image: PROVISORIA_IMG  },
  { id: 2,  category: 'graneis',      name: 'Mix de Frutas Secas',              desc: 'Combinação perfeita de damasco, uva passa, tâmara e figo seco sem adição de açúcar.',                                                         price: 'R$ 45,00/kg', image: PROVISORIA2_IMG },
  { id: 3,  category: 'graneis',      name: 'Quinoa em Grãos Orgânica',         desc: 'Superalimento completo rico em proteínas, aminoácidos essenciais e de baixo índice glicêmico.',                                              price: 'R$ 28,00/kg', image: PROVISORIA_IMG  },

  // Encapsulados
  { id: 4,  category: 'encapsulados', name: 'Picolinato de Cromo (120 caps)',   desc: 'Suplemento mineral excelente para auxiliar no controle da insulina e redução do desejo por doces.',                                          price: 'R$ 54,90',    image: PROVISORIA2_IMG },
  { id: 5,  category: 'encapsulados', name: 'Colágeno Hidrolisado Verisol',     desc: 'Promove a elasticidade da pele, fortalecimento de unhas, cabelos e saúde das articulações.',                                                  price: 'R$ 89,00',    image: PROVISORIA_IMG  },
  { id: 6,  category: 'encapsulados', name: 'Ômega 3 Ultra Puro (90 caps)',     desc: 'Alta concentração de EPA/DHA livre de metais pesados, excelente para a saúde cerebral e cardiovascular.',                                    price: 'R$ 79,90',    image: PROVISORIA2_IMG },

  // Suplementos
  { id: 7,  category: 'suplementos',  name: 'Whey Protein Isolado 100%',        desc: 'Alta absorção proteica para ganho de massa muscular magra, sem adição de glúten ou açúcares.',                                              price: 'R$ 189,00',   image: PROVISORIA_IMG  },
  { id: 8,  category: 'suplementos',  name: 'Creatina Monohidratada 100% Pura', desc: 'Aumenta o desempenho físico, força e explosão durante treinos intensificados.',                                                             price: 'R$ 95,00',    image: PROVISORIA2_IMG },
  { id: 9,  category: 'suplementos',  name: 'Termogênico Natural Extreme',      desc: 'À base de cafeína anidra, chá verde e gengibre para acelerar a queima de gorduras.',                                                         price: 'R$ 110,00',   image: PROVISORIA_IMG  },

  // Marmitas Fit
  { id: 10, category: 'marmitas',     name: 'Frango Grelhado e Batata Doce',    desc: 'Delicioso peito de frango temperado com ervas finas acompanhado de purê rústico de batata doce.',                                           price: 'R$ 22,90',    image: PROVISORIA2_IMG },
  { id: 11, category: 'marmitas',     name: 'Escondidinho de Patinho',           desc: 'Carne moída premium de patinho sob uma camada cremosa de mandioca gratinada fit.',                                                           price: 'R$ 24,90',    image: PROVISORIA_IMG  },
  { id: 12, category: 'marmitas',     name: 'Risoto de Cogumelos Fit',           desc: 'Arroz integral cremoso cozido com mix de cogumelos frescos shimeji e paris ao toque de amêndoas.',                                           price: 'R$ 26,90',    image: PROVISORIA2_IMG },

  // Sem Glúten
  { id: 13, category: 'sem-gluten',   name: 'Pão Artesanal Multigrãos',         desc: 'Pão fofinho feito com farinha de amêndoas, linhaça e sementes de girassol, sem glúten.',                                                    price: 'R$ 18,90',    image: PROVISORIA_IMG  },
  { id: 14, category: 'sem-gluten',   name: 'Cookies de Cacau com Aveia',       desc: 'Biscoitos crocantes adoçados com xilitol, lotados de gotas de chocolate 70% sem glúten.',                                                   price: 'R$ 12,50',    image: PROVISORIA2_IMG },

  // Bebidas
  { id: 15, category: 'bebidas',      name: 'Kombucha de Hibisco e Gengibre',   desc: 'Bebida probiótica fermentada naturalmente, refrescante e excelente para a flora intestinal.',                                               price: 'R$ 11,90',    image: PROVISORIA_IMG  },
  { id: 16, category: 'bebidas',      name: 'Suco Verde Detox Cold Pressed',    desc: 'Suco prensado a frio com couve, abacaxi, hortelã, gengibre e maçã sem água ou conservantes.',                                              price: 'R$ 9,90',     image: PROVISORIA2_IMG },

  // Sem Lactose
  { id: 17, category: 'sem-lactose',  name: 'Iogurte de Coco Natural Vegano',   desc: 'Iogurte cremoso fermentado à base de leite de coco puro, rico em gorduras saudáveis e probióticos.',                                       price: 'R$ 15,90',    image: PROVISORIA_IMG  },
  { id: 18, category: 'sem-lactose',  name: 'Creme de Leite de Aveia Gourmet',  desc: 'Alternativa culinária cremosa e leve para substituir o creme de leite tradicional nas suas receitas.',                                     price: 'R$ 7,50',     image: PROVISORIA2_IMG }
];


const UNITS_DATA = [
  { id: 1, name: 'Vida Leve Guaíba', state: 'RS', address: 'R. São José, 867 – sala 03 – Centro, Guaíba - RS', features: ['Granéis', 'Encapsulados', 'Suplementos', 'Cafetaria'], whatsapp: '5551987654321' },
  { id: 2, name: 'Vida Leve Barueri', state: 'SP', address: 'Praça das Rosas, 20 Térreo – AlphaVille Industrial, Barueri - SP', features: ['Granéis', 'Encapsulados', 'Suplementos', 'Cafetaria'], whatsapp: '5511976543210' },
  { id: 3, name: 'Vida Leve Balneário Camboriú', state: 'SC', address: 'ED Pablo Neruda – Av. Brasil, 3553 – sala 2 – Centro, Balneário Camboriú - SC', features: ['Granéis', 'Encapsulados', 'Suplementos', 'Cafetaria'], whatsapp: '5547988887777' },
  { id: 4, name: 'Vida Leve Florianópolis', state: 'SC', address: 'Trevo do Erasmo – Rod. Francisco Magno Vieira, 5018 – Campeche, Florianópolis - SC', features: ['Granéis', 'Encapsulados', 'Suplementos', 'Cafetaria'], whatsapp: '5548999998888' },
  { id: 5, name: 'Vida Leve Guarujá', state: 'SP', address: 'Chris Shopping – R. Amazonas, 72 – loja 19 – Vicente de Carvalho, Guarujá - SP', features: ['Granéis', 'Encapsulados', 'Suplementos', 'Cafetaria'], whatsapp: '5513988776655' },
  { id: 6, name: 'Vida Leve Joinville', state: 'SC', address: 'R. Min. Calógeras, 880 – Centro, Joinville - SC', features: ['Granéis', 'Encapsulados', 'Suplementos', 'Cafetaria'], whatsapp: '5547999112233' }
];

const BLOG_DATA = [
  { id: 1, category: 'Nutrição', title: '5 Benefícios da semente de abóbora no seu dia a dia', date: '20 de Maio de 2026', desc: 'Rica em magnésio, zinco e gorduras saudáveis, a semente de abóbora é uma excelente aliada na imunidade e no controle do colesterol. Saiba como adicioná-la em suas refeições.', link: '#' },
  { id: 2, category: 'Estilo de Vida', title: 'Como começar uma transição alimentar sem estresse', date: '15 de Maio de 2026', desc: 'Substituições simples e gradativas são o segredo do sucesso para adotar hábitos de vida duradouros. Descubra dicas práticas de nutricionistas da nossa rede.', link: '#' },
  { id: 3, category: 'Receitas', title: 'Bolo fit de canela e banana feito no liquidificador', date: '08 de Maio de 2026', desc: 'Uma opção sem lactose, rápida e incrivelmente saborosa para o seu café da tarde. Leva poucos ingredientes e fica super fofinho. Veja o passo a passo completo.', link: '#' },
  { id: 4, category: 'Nutrição', title: 'Como o Ômega 3 atua na melhora da concentração e foco', date: '24 de Maio de 2026', desc: 'Essencial para o bom funcionamento do cérebro, o ácido graxo auxilia na memória, cognição e saúde cardiovascular. Veja as melhores fontes e como suplementar.', link: '#' },
  { id: 5, category: 'Estilo de Vida', title: 'Marmitas fit congeladas: praticidade sem abrir mão da saúde', date: '18 de Maio de 2026', desc: 'Manter a consistência na dieta ficou mais fácil com a tecnologia do ultracongelamento, que preserva os nutrientes e sabor. Saiba como organizar sua semana fit.', link: '#' }
];

/* ==========================================================================
   DOM ELEMENTS SELECTORS
   ========================================================================== */

const header = document.getElementById('header');
const toggle = document.getElementById('vlMenuToggle');
const overlay = document.getElementById('vlMenuOverlay');
const panel = document.getElementById('vlMenuPanel');
const mobileLinks = panel ? panel.querySelectorAll('.vl-menu-link') : [];

const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.product-filters .filter-btn');

const unitsGrid = document.getElementById('unitsGrid');
const unitSearchInput = document.getElementById('unitSearchInput');
const stateTabs = document.querySelectorAll('.state-tabs .state-tab');

const blogGrid = document.getElementById('blogGrid');

// Franchise form multi-step elements
const franchiseForm = document.getElementById('franchiseForm');
const formProgress = document.getElementById('formProgress');
const formSteps = document.querySelectorAll('.form-step');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const formSuccessMessage = document.getElementById('formSuccessMessage');
const btnResetForm = document.getElementById('btnResetForm');

// Consulting Modal elements
const consultingModal = document.getElementById('consultingModal');
const btnConsultingModal = document.getElementById('btnConsultingModal');
const btnModalClose = document.getElementById('btnModalClose');
const consultingForm = document.getElementById('consultingForm');
const consultingSuccess = document.getElementById('consultingSuccess');
const btnResetConsultModal = document.getElementById('btnResetConsultModal');

// WhatsApp Modal elements
const whatsappModal = document.getElementById('whatsappModal');
const btnWhatsappModalClose = document.getElementById('btnWhatsappModalClose');
const whatsappModalStoreName = document.getElementById('whatsappModalStoreName');
const whatsappMessageText = document.getElementById('whatsappMessageText');
const btnSendWhatsappRedirect = document.getElementById('btnSendWhatsappRedirect');

// Testimonial slider elements
const testimonialSlider = document.getElementById('testimonialSlider');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');
const sliderDots = document.getElementById('sliderDots');

// SPA Main Layout elements
const spaSections = document.querySelectorAll('.main-content > section');
const adminSection = document.getElementById('admin');

// Admin Lead Dashboard Elements
const leadsTableBody = document.getElementById('leadsTableBody');
const noLeadsMessage = document.getElementById('noLeadsMessage');
const statTotalLeads = document.getElementById('statTotalLeads');
const statHighCapital = document.getElementById('statHighCapital');
const btnExportCSV = document.getElementById('btnExportCSV');
const btnClearLeads = document.getElementById('btnClearLeads');

let activeWhatsappStore = null;

/* ==========================================================================
   INITIALIZATION / ROUTING SYSTEM (SPA)
   ========================================================================== */

function handleRouting() {
  const hash = window.location.hash || '#inicio';
  
  if (hash === '#admin') {
    // Hide standard landing page elements
    spaSections.forEach(section => {
      if (section.id !== 'admin') section.style.display = 'none';
    });
    header.style.display = 'none';
    document.querySelector('.main-footer').style.display = 'none';
    
    // Show admin dashboard
    adminSection.style.display = 'block';
    loadLeadsToAdmin();
  } else {
    // Restore standard landing page
    spaSections.forEach(section => {
      if (section.id !== 'admin') section.style.display = '';
    });
    header.style.display = '';
    document.querySelector('.main-footer').style.display = '';
    adminSection.style.display = 'none';
    
    // Smooth scroll to target if user clicked navigation anchor
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);

// Header background change on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

/* ==========================================================================
   MOBILE MENU DRAWER FUNCTIONALITY
   ========================================================================== */

function openMenu() {
  if (toggle) toggle.classList.add('vl-open');
  if (overlay) overlay.classList.add('vl-show');
  if (panel) panel.classList.add('vl-show');
  document.body.style.overflow = 'hidden';
}

function fecharMenu() {
  if (toggle) toggle.classList.remove('vl-open');
  if (overlay) overlay.classList.remove('vl-show');
  if (panel) panel.classList.remove('vl-show');
  document.body.style.overflow = '';
}

if (toggle && panel) {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const aberto = panel.classList.contains('vl-show');
    if (aberto) fecharMenu(); else openMenu();
  });
}

if (overlay) overlay.addEventListener('click', fecharMenu);
if (mobileLinks) {
  mobileLinks.forEach(link => link.addEventListener('click', fecharMenu));
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharMenu();
});

/* ==========================================================================
   PRODUCTS CATALOGUE FILTERS & GRID GENERATION
   ========================================================================== */

let currentCategoryFilter = 'all';
let currentSearchQuery = '';

function generateProductCards() {
  productsGrid.innerHTML = '';
  
  let filteredProducts = PRODUCTS_DATA;
  
  if (currentCategoryFilter !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === currentCategoryFilter);
  }
  
  if (currentSearchQuery) {
    const q = currentSearchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.desc.toLowerCase().includes(q)
    );
  }

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p style="color: white; grid-column: 1/-1; text-align: center;">Nenhum produto encontrado.</p>';
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card animate-up';
    const img = product.image || PROVISORIA_IMG;
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${img}" alt="${product.name}" class="product-img" loading="lazy">
        <span class="product-badge">${product.category}</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <button class="btn-sage-new btn-details" style="padding: 8px 18px; font-size: 0.85rem;">Ver Detalhes</button>
        </div>
      </div>
    `;

    const btnDetails = card.querySelector('.btn-details');
    if (btnDetails) {
      btnDetails.addEventListener('click', () => {
        if (typeof openProductDetailModal === 'function') {
          openProductDetailModal(product.id);
        } else if (typeof window.openProductDetailModal === 'function') {
          window.openProductDetailModal(product.id);
        }
      });
    }

    productsGrid.appendChild(card);
  });
}

// Filter button logic
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Add grid fade anim
    productsGrid.style.opacity = '0';
    productsGrid.style.transform = 'translateY(10px)';
    
    currentCategoryFilter = btn.getAttribute('data-filter');
    
    setTimeout(() => {
      generateProductCards();
      productsGrid.style.opacity = '1';
      productsGrid.style.transform = 'translateY(0)';
    }, 250);
  });
});

// Search input logic
const productSearchInput = document.getElementById('productSearchInput');
if (productSearchInput) {
  productSearchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    generateProductCards();
  });
}

// Render initial products
generateProductCards();

// Expand catalogue logic
const btnVerMaisProdutos = document.getElementById('btnVerMaisProdutos');
const btnVerMenosProdutos = document.getElementById('btnVerMenosProdutos');
const produtosCatalogo = document.getElementById('produtos-catalogo');
const btnVerMaisContainer = document.getElementById('btnVerMaisContainer');

if (btnVerMaisProdutos && produtosCatalogo) {
  btnVerMaisProdutos.addEventListener('click', () => {
    produtosCatalogo.style.display = 'block';
    btnVerMaisContainer.style.display = 'none';
    
    // Smooth scroll to catalogue filters
    produtosCatalogo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (btnVerMenosProdutos && produtosCatalogo && btnVerMaisContainer) {
  btnVerMenosProdutos.addEventListener('click', () => {
    produtosCatalogo.style.display = 'none';
    btnVerMaisContainer.style.display = 'block';
    
    // Smooth scroll back to products section top
    const produtosSection = document.getElementById('produtos');
    if (produtosSection) {
      produtosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ==========================================================================
   UNIDADES SEARCH & RENDER
   ========================================================================== */

function generateUnitCards(searchQuery = '', filterState = 'all') {
  if (!unitsGrid) return;
  unitsGrid.innerHTML = '';
  
  const filteredUnits = UNITS_DATA.filter(unit => {
    const matchesSearch = searchQuery === '' || 
      unit.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      unit.address.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesState = filterState === 'all' || unit.state === filterState;
    
    return matchesSearch && matchesState;
  });

  if (filteredUnits.length === 0) {
    unitsGrid.innerHTML = `
      <div class="text-center" style="grid-column: 1/-1; padding: 48px 0; color: var(--text-muted);">
        <p>Nenhuma loja encontrada para a busca realizada.</p>
      </div>
    `;
    return;
  }

  filteredUnits.forEach(unit => {
    const card = document.createElement('div');
    card.className = 'unit-card animate-up';
    card.innerHTML = `
      <h3 class="unit-name">${unit.name}</h3>
      <p class="unit-address">${unit.address}</p>
      <h4 class="unit-features-title">Nessa unidade você vai encontrar:</h4>
      <div class="unit-features">
        ${unit.features.map(f => `<span class="feature-badge">${f}</span>`).join('')}
      </div>
      <button class="unit-btn" onclick="openWhatsappStoreModal('${unit.name}', '${unit.whatsapp}')">
        <span>💬</span> Fale com a loja
      </button>
    `;
    unitsGrid.appendChild(card);
  });
}

// Search and state tab listeners
if (unitSearchInput) {
  unitSearchInput.addEventListener('input', (e) => {
    const activeTab = document.querySelector('.state-tabs .state-tab.active');
    const activeState = activeTab ? activeTab.getAttribute('data-state') : 'all';
    generateUnitCards(e.target.value, activeState);
  });
}

if (stateTabs && stateTabs.length > 0) {
  stateTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      stateTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (unitsGrid) unitsGrid.style.opacity = '0';
      setTimeout(() => {
        const searchVal = unitSearchInput ? unitSearchInput.value : '';
        generateUnitCards(searchVal, tab.getAttribute('data-state'));
        if (unitsGrid) unitsGrid.style.opacity = '1';
      }, 200);
    });
  });
}

// Render initial stores list
generateUnitCards();

/* ==========================================================================
   BLOG GRID GENERATION
   ========================================================================== */

function generateBlogCards() {
  blogGrid.innerHTML = '';
  BLOG_DATA.forEach(post => {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
      <img src="assets/hero_background.png" alt="${post.title}" class="blog-img">
      <div class="blog-card-body">
        <span class="blog-meta">${post.category} • ${post.date}</span>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.desc}</p>
        <a href="${post.link}" class="blog-link" onclick="alert('Funcionalidade de Artigo Completo simulada nesta demonstração!')">Ler Matéria <span>→</span></a>
      </div>
    `;
    blogGrid.appendChild(card);
  });
}

generateBlogCards();

/* ==========================================================================
   TESTIMONIALS SLIDER AUTOMATION
   ========================================================================== */

let currentSlideIndex = 0;
let slideInterval = null;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.slider-dots .dot');

function showSlide(index) {
  if (testimonialCards.length === 0) return;
  testimonialCards.forEach(card => card.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (index >= testimonialCards.length) currentSlideIndex = 0;
  else if (index < 0) currentSlideIndex = testimonialCards.length - 1;
  else currentSlideIndex = index;
  
  if (testimonialCards[currentSlideIndex]) {
    testimonialCards[currentSlideIndex].classList.add('active');
  }
  if (dots[currentSlideIndex]) {
    dots[currentSlideIndex].classList.add('active');
  }
}

function startSliderAutoplay() {
  if (testimonialCards.length === 0) return;
  stopSliderAutoplay();
  slideInterval = setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 5000);
}

function stopSliderAutoplay() {
  if (slideInterval) clearInterval(slideInterval);
}

if (sliderNext && sliderPrev && testimonialCards.length > 0) {
  sliderNext.addEventListener('click', () => {
    stopSliderAutoplay();
    showSlide(currentSlideIndex + 1);
    startSliderAutoplay();
  });

  sliderPrev.addEventListener('click', () => {
    stopSliderAutoplay();
    showSlide(currentSlideIndex - 1);
    startSliderAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSliderAutoplay();
      showSlide(index);
      startSliderAutoplay();
    });
  });

  startSliderAutoplay();
}

/* ==========================================================================
   WHATSAPP REDIRECT MODAL SYSTEM
   ========================================================================== */

window.openWhatsappStoreModal = function(storeName, whatsappNumber) {
  activeWhatsappStore = { name: storeName, num: whatsappNumber };
  if (whatsappModalStoreName) whatsappModalStoreName.innerText = storeName;
  if (whatsappMessageText) whatsappMessageText.value = `Olá! Gostaria de saber mais sobre a linha de produtos naturais da unidade de ${storeName} e se vocês realizam entregas na minha região.`;
  if (whatsappModal) whatsappModal.classList.add('active');
};

window.openWhatsappStoreModalForProduct = function(productName) {
  // Preset to Guaiba as default, but custom message
  activeWhatsappStore = { name: 'Vida Leve Guaíba', num: '5551987654321' };
  if (whatsappModalStoreName) whatsappModalStoreName.innerText = 'Vida Leve Guaíba (Unidade Padrão)';
  if (whatsappMessageText) whatsappMessageText.value = `Olá! Gostaria de obter mais informações sobre o produto a granel/suplemento "${productName}" que vi no site Rede Vida Leve. Vocês possuem em estoque?`;
  if (whatsappModal) whatsappModal.classList.add('active');
};

if (btnWhatsappModalClose && whatsappModal) {
  btnWhatsappModalClose.addEventListener('click', () => {
    whatsappModal.classList.remove('active');
  });
}

if (btnSendWhatsappRedirect && whatsappModal) {
  btnSendWhatsappRedirect.addEventListener('click', () => {
    if (!activeWhatsappStore) return;
    const msg = whatsappMessageText ? encodeURIComponent(whatsappMessageText.value) : '';
    const waUrl = `https://api.whatsapp.com/send?phone=${activeWhatsappStore.num}&text=${msg}`;
    window.open(waUrl, '_blank');
    whatsappModal.classList.remove('active');
  });
}

/* ==========================================================================
   NUTRITIONAL CONSULTING MOCK APPOINTMENT MODAL
   ========================================================================== */

if (btnConsultingModal && consultingForm && consultingSuccess && consultingModal) {
  btnConsultingModal.addEventListener('click', () => {
    consultingForm.reset();
    consultingForm.style.display = 'block';
    consultingSuccess.style.display = 'none';
    consultingModal.classList.add('active');
  });
}

if (btnModalClose && consultingModal) {
  btnModalClose.addEventListener('click', () => {
    consultingModal.classList.remove('remove');
    consultingModal.classList.remove('active');
  });
}

if (consultingForm && consultingSuccess) {
  consultingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const consultName = document.getElementById('consultName');
    const consultPhone = document.getElementById('consultPhone');
    const consultDate = document.getElementById('consultDate');
    const consultTime = document.getElementById('consultTime');
    
    // Save consulting lead
    const newConsult = {
      date: new Date().toLocaleDateString('pt-BR'),
      name: consultName ? consultName.value : '',
      email: 'Agendamento Consultoria',
      phone: consultPhone ? consultPhone.value : '',
      capital: `Agendado para: ${consultDate ? consultDate.value : ''} às ${consultTime ? consultTime.value : ''}`,
      city: 'Foco Saúde'
    };
    
    saveLeadToLocalStorage(newConsult);
    
    consultingForm.style.display = 'none';
    consultingSuccess.style.display = 'flex';
  });
}

if (btnResetConsultModal && consultingModal) {
  btnResetConsultModal.addEventListener('click', () => {
    consultingModal.classList.remove('active');
  });
}

/* ==========================================================================
   FRANCHISE MULTI-STEP LEAD FORM
   ========================================================================== */

if (btnNext) {
  btnNext.addEventListener('click', () => {
    const name = document.getElementById('leadName');
    const email = document.getElementById('leadEmail');
    
    if (name && email) {
      if (name.checkValidity() && email.checkValidity()) {
        const step1 = document.querySelector('.form-step[data-step="1"]');
        const step2 = document.querySelector('.form-step[data-step="2"]');
        if (step1) step1.classList.remove('active');
        if (step2) step2.classList.add('active');
        if (formProgress) formProgress.style.width = '100%';
      } else {
        name.reportValidity() || email.reportValidity();
      }
    }
  });
}

if (btnPrev) {
  btnPrev.addEventListener('click', () => {
    const step1 = document.querySelector('.form-step[data-step="1"]');
    const step2 = document.querySelector('.form-step[data-step="2"]');
    if (step2) step2.classList.remove('active');
    if (step1) step1.classList.add('active');
    if (formProgress) formProgress.style.width = '50%';
  });
}

if (franchiseForm) {
  franchiseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const leadNameVal = document.getElementById('leadName') ? document.getElementById('leadName').value : '';
    const leadEmailVal = document.getElementById('leadEmail') ? document.getElementById('leadEmail').value : '';
    const leadPhoneVal = document.getElementById('leadPhone') ? document.getElementById('leadPhone').value : '';
    const leadCapitalVal = document.getElementById('leadCapital') ? document.getElementById('leadCapital').value : '';
    const leadCityVal = document.getElementById('leadCity') ? document.getElementById('leadCity').value : '';

    const leadData = {
      date: new Date().toLocaleDateString('pt-BR'),
      name: leadNameVal,
      email: leadEmailVal,
      phone: leadPhoneVal,
      capital: leadCapitalVal,
      city: leadCityVal
    };

    saveLeadToLocalStorage(leadData);

    // Transition form state to success
    franchiseForm.style.display = 'none';
    if (formSuccessMessage) formSuccessMessage.style.display = 'flex';
  });
}

if (btnResetForm && franchiseForm && formSuccessMessage) {
  btnResetForm.addEventListener('click', () => {
    franchiseForm.reset();
    if (formProgress) formProgress.style.width = '50%';
    const step1 = document.querySelector('.form-step[data-step="1"]');
    const step2 = document.querySelector('.form-step[data-step="2"]');
    if (step2) step2.classList.remove('active');
    if (step1) step1.classList.add('active');
    franchiseForm.style.display = 'block';
    formSuccessMessage.style.display = 'none';
  });
}

function saveLeadToLocalStorage(lead) {
  const leads = JSON.parse(localStorage.getItem('vida_leve_leads') || '[]');
  leads.unshift(lead);
  localStorage.setItem('vida_leve_leads', JSON.stringify(leads));
}

/* ==========================================================================
   LOCAL DASHBOARD ADMINISTRATION SYSTEM
   ========================================================================== */

function loadLeadsToAdmin() {
  const leads = JSON.parse(localStorage.getItem('vida_leve_leads') || '[]');
  leadsTableBody.innerHTML = '';
  
  statTotalLeads.innerText = leads.length;
  
  // Calculate percentage of leads with high capital (e.g. 100k-200k or 200k+)
  const highCapitalCount = leads.filter(l => l.capital === '100k-200k' || l.capital === '200k+' || l.capital.includes('Acima')).length;
  const pct = leads.length > 0 ? Math.round((highCapitalCount / leads.length) * 100) : 0;
  statHighCapital.innerText = `${pct}%`;

  if (leads.length === 0) {
    noLeadsMessage.style.display = 'block';
    return;
  }
  
  noLeadsMessage.style.display = 'none';

  leads.forEach((lead, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${lead.date}</td>
      <td><strong>${lead.name}</strong></td>
      <td>${lead.email}</td>
      <td><a href="https://api.whatsapp.com/send?phone=${lead.phone.replace(/\D/g, '')}" target="_blank" style="color: #25d366; font-weight: 600;">💚 ${lead.phone}</a></td>
      <td><span class="feature-badge">${lead.capital}</span></td>
      <td>${lead.city}</td>
      <td><button class="btn-table-delete" onclick="deleteLead(${index})">Deletar</button></td>
    `;
    leadsTableBody.appendChild(tr);
  });
}

window.deleteLead = function(index) {
  if (!confirm('Deseja realmente remover este lead?')) return;
  const leads = JSON.parse(localStorage.getItem('vida_leve_leads') || '[]');
  leads.splice(index, 1);
  localStorage.setItem('vida_leve_leads', JSON.stringify(leads));
  loadLeadsToAdmin();
};

if (btnClearLeads) {
  btnClearLeads.addEventListener('click', () => {
    if (!confirm('ATENÇÃO: Isso apagará permanentemente todos os leads cadastrados localmente! Continuar?')) return;
    localStorage.removeItem('vida_leve_leads');
    loadLeadsToAdmin();
  });
}

if (btnExportCSV) {
  btnExportCSV.addEventListener('click', () => {
    const leads = JSON.parse(localStorage.getItem('vida_leve_leads') || '[]');
    if (leads.length === 0) {
      alert('Nenhum lead disponível para exportação.');
      return;
    }

    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Data,Nome,E-mail,WhatsApp,Capital,Cidade/UF\r\n';

    leads.forEach(lead => {
      const row = [
        `"${lead.date}"`,
        `"${lead.name}"`,
        `"${lead.email}"`,
        `"${lead.phone}"`,
        `"${lead.capital}"`,
        `"${lead.city}"`
      ].join(',');
      csvContent += row + '\r\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'leads_vida_leve.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

/* ==========================================================================
   HERO CAROUSEL — FINAL CLEAN IMPLEMENTATION
   ========================================================================== */
(function () {
  'use strict';

  let current  = 0;
  let timer    = null;
  const DELAY  = 5500;
  const TOTAL  = 3; // number of real slides

  function track()  { return document.getElementById('heroCarouselTrack'); }
  function fill()   { return document.getElementById('heroProgressFill'); }

  /* Move to slide index (wraps around) */
  function goTo(n) {
    const tr = track();
    if (!tr) return;

    // Wrap
    current = ((n % TOTAL) + TOTAL) % TOTAL;

    /*
     * Track is width:300%, each slide is 33.333% of that.
     * To show slide N, shift the track by -(100/3)*N % of itself.
     * e.g. slide 0 → 0%, slide 1 → -33.333%, slide 2 → -66.666%
     */
    const pct = (100 / TOTAL) * current;
    tr.style.transform = `translateX(-${pct}%)`;

    // Active classes on slides
    document.querySelectorAll('.hero-carousel-slide').forEach((s, i) => {
      s.classList.toggle('active', i === current);
    });

    // Active classes on dots
    document.querySelectorAll('#heroCarouselDots .hero-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });

    // Animate progress bar
    const f = fill();
    if (f) {
      f.style.transition = 'none';
      f.style.width = '0%';
      void f.offsetWidth; // force reflow
      f.style.transition = `width ${DELAY}ms linear`;
      f.style.width = '100%';
    }
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(next, DELAY);
  }

  function stopAutoplay() {
    clearInterval(timer);
    const f = fill();
    if (f) { f.style.transition = 'none'; f.style.width = '0%'; }
  }

  function init() {
    const tr    = track();
    const btnN  = document.getElementById('heroCarouselNext');
    const btnP  = document.getElementById('heroCarouselPrev');
    const hero  = document.getElementById('inicio');

    if (!tr) return;

    // Buttons
    if (btnN) btnN.onclick = (e) => { e.stopPropagation(); stopAutoplay(); next(); startAutoplay(); };
    if (btnP) btnP.onclick = (e) => { e.stopPropagation(); stopAutoplay(); prev(); startAutoplay(); };

    // Dots
    document.querySelectorAll('#heroCarouselDots .hero-dot').forEach((dot, i) => {
      dot.onclick = (e) => { e.stopPropagation(); stopAutoplay(); goTo(i); startAutoplay(); };
    });

    // Pause autoplay on hover
    if (hero) {
      hero.addEventListener('mouseenter', stopAutoplay);
      hero.addEventListener('mouseleave', startAutoplay);
    }

    // Swipe
    let sx = 0;
    tr.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; stopAutoplay(); }, { passive: true });
    tr.addEventListener('touchend',   (e) => {
      const dx = sx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 50) { dx > 0 ? next() : prev(); }
      startAutoplay();
    }, { passive: true });

    // Init
    goTo(0);
    startAutoplay();
  }

  // Initialize robustly using DOMContentLoaded or check readyState directly
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  // Remove loading screen after page load with smooth transition
  function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const appContainer = document.querySelector('.app-container');
    
    if (loadingScreen) {
      loadingScreen.classList.add('hide');
      if (appContainer) {
        appContainer.classList.add('fade-in-page');
      }
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 600);
    }
  }

  // Força a tela de loading a durar exatamente 2 segundos para uma transição suave e memorável da marca
  setTimeout(hideLoadingScreen, 2000);

  // Intersection Observer para animar elementos ao scrollar
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observar todos os elementos com classe scroll-spy
  document.querySelectorAll('.scroll-spy, .animate-up, .category-card, .product-card, .blog-card').forEach(el => {
    observer.observe(el);
  })

})();





/* ==========================================================================
   PRODUCT DETAIL MODAL LOGIC
   ========================================================================== */
const productDetailModal = document.getElementById('productDetailModal');
const btnProductDetailClose = document.getElementById('btnProductDetailClose');
const detailProductImg = document.getElementById('detailProductImg');
const detailProductCategory = document.getElementById('detailProductCategory');
const detailProductName = document.getElementById('detailProductName');
const detailProductDesc = document.getElementById('detailProductDesc');
const detailProductPrice = document.getElementById('detailProductPrice');
const btnBuyWhatsapp = document.getElementById('btnBuyWhatsapp');

// Quantity selector modal interactivity
const btnQtyMinus = document.getElementById('btnQtyMinus');
const btnQtyPlus = document.getElementById('btnQtyPlus');
const inputProductQty = document.getElementById('inputProductQty');
const inputProductNotes = document.getElementById('inputProductNotes');

if (btnQtyMinus && btnQtyPlus && inputProductQty) {
  btnQtyMinus.addEventListener('click', () => {
    let currentQty = parseInt(inputProductQty.value) || 1;
    if (currentQty > 1) {
      inputProductQty.value = currentQty - 1;
    }
  });

  btnQtyPlus.addEventListener('click', () => {
    let currentQty = parseInt(inputProductQty.value) || 1;
    if (currentQty < 99) {
      inputProductQty.value = currentQty + 1;
    }
  });
}

function openProductDetailModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;
  
  if (detailProductCategory) detailProductCategory.innerText = product.category;
  if (detailProductName) detailProductName.innerText = product.name;
  if (detailProductDesc) detailProductDesc.innerText = product.desc;
  if (detailProductPrice) detailProductPrice.innerText = product.price;
  
  // Reseta escolhas interativas ao abrir o modal
  if (inputProductQty) inputProductQty.value = 1;
  if (inputProductNotes) inputProductNotes.value = '';
  
  // Usa a própria imagem do produto (provisoria/provisoria2) definida no PRODUCTS_DATA
  if (detailProductImg) detailProductImg.src = product.image || PROVISORIA_IMG;

  if (btnBuyWhatsapp) {
    btnBuyWhatsapp.onclick = () => {
      const qty = inputProductQty ? inputProductQty.value : 1;
      const notes = inputProductNotes ? inputProductNotes.value.trim() : '';
      
      let msgText = `Olá! Gostaria de encomendar o produto "${product.name}" (${product.price}).\n\n*Quantidade:* ${qty}x\n`;
      if (notes) {
        msgText += `*Observações:* ${notes}\n`;
      }
      msgText += `\nVi este produto no catálogo digital da unidade de Regente Feijó.`;
      
      if (productDetailModal) productDetailModal.classList.remove('active');
      
      // Configura e exibe o modal de confirmação do WhatsApp
      activeWhatsappStore = { name: 'Vida Leve Regente Feijó', num: '5551987654321' };
      if (whatsappModalStoreName) whatsappModalStoreName.innerText = 'Vida Leve Regente Feijó';
      if (whatsappMessageText) whatsappMessageText.value = msgText;
      if (whatsappModal) whatsappModal.classList.add('active');
    };
  }
  
  if (productDetailModal) productDetailModal.classList.add('active');
}
window.openProductDetailModal = openProductDetailModal;

if (btnProductDetailClose && productDetailModal) {
  btnProductDetailClose.addEventListener('click', () => {
    productDetailModal.classList.remove('active');
  });
}

if (productDetailModal) {
  // Fecha o modal ao clicar na área escura externa (overlay)
  productDetailModal.addEventListener('click', (e) => {
    if (e.target === productDetailModal) {
      productDetailModal.classList.remove('active');
    }
  });
}

/* ==========================================================================
   CONTACT FORM LOGIC
   ========================================================================== */
const generalContactForm = document.getElementById('generalContactForm');
const contactSuccessMessage = document.getElementById('contactSuccessMessage');
const btnResetContactForm = document.getElementById('btnResetContactForm');

if (generalContactForm) {
  generalContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    generalContactForm.style.display = 'none';
    contactSuccessMessage.style.display = 'block';
  });

  btnResetContactForm.addEventListener('click', () => {
    generalContactForm.reset();
    contactSuccessMessage.style.display = 'none';
    generalContactForm.style.display = 'block';
  });
}


/* ==========================================================================
   BACK TO TOP BUTTON LOGIC
   ========================================================================== */
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  // Scroll to top when button is clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
