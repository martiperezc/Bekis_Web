// Datos editables del prototipo. Sustituir contactos y contenido solo después de verificarlos.
const CONFIG = {
  whatsapp: '593999183613', // número internacional sin '+'; ejemplo referencial (NO usar): 593XXXXXXXXX
  email: 'bekisgourmet@gmail.com',
  socials: { instagram:'https://www.instagram.com/bekisgourmet/', facebook:'https://www.facebook.com/Bekis_Vegetales_Gourmet/'}
};
// Recetas de desarrollo gastronómico propuestas; no son formulaciones industriales de Bekis.
// Los gramos de Bekis corresponden al producto ya preparado y escurrido al servir, según convenga.
const recipes = [
  {
    icon:'🧀',title:'Crostini de queso de cabra, pera asada y zucchini tropical',variety:'Agridulce tropical',
    desc:'Entrada de contraste dulce, cremoso y ácido, terminada con Bekis.',servings:'4 personas (8 crostini)',time:'35 min',difficulty:'Intermedia',
    ingredients:[
      'Pan de masa madre: 240 g (8 rebanadas de 30 g)',
      'Queso de cabra cremoso: 160 g',
      'Pera firme: 220 g (sin corazón)',
      'Bekis Agridulce Tropical: 120 g (escurrido)',
      'Aceite de oliva: 24 g',
      'Miel: 18 g',
      'Nueces: 35 g',
      'Jugo de limón: 12 g',
      'Tomillo fresco: 3 g',
      'Sal: 2 g',
      'Pimienta negra molida: 1 g'
    ],
    steps:[
      'Precalienta el horno a 190 °C. Lava la pera, retira el corazón y córtala en gajos de 8–10 mm. Mezcla con 8 g de aceite, 12 g de miel y 1 g de sal.',
      'Distribuye los gajos en una bandeja sin superponerlos. Asa durante 14–18 minutos, volteando a mitad de cocción, hasta que se ablanden ligeramente y se doren en los bordes.',
      'Coloca las nueces en una bandeja aparte y tuéstalas 5–7 minutos a 170 °C. Déjalas enfriar y pícalas en trozos irregulares.',
      'Bate el queso de cabra con 6 g de jugo de limón, 6 g de aceite y 1 g de pimienta hasta conseguir una crema untable. Reserva refrigerada.',
      'Pincela el pan con los 10 g restantes de aceite y tuesta a 190 °C durante 7–9 minutos, hasta que esté dorado y firme.',
      'Escurre ligeramente el zucchini Bekis; si las piezas son grandes, córtalas para repartirlas de forma uniforme. Unta 20 g de queso aproximadamente sobre cada tostada.',
      'Añade pera asada, distribuye el zucchini y termina con nueces, tomillo, el limón restante y la miel restante. Sirve enseguida para preservar el crujiente.'
    ],
    chef:'Montaje: 2 crostini por comensal. Mantén el zucchini separado del pan hasta el último momento para evitar humedad.'
  },
  {
    icon:'🥪',title:'Sándwich de pollo, alioli suave y zucchini tradicional',variety:'Receta tradicional',
    desc:'Pan dorado, pollo jugoso y una capa fresca de zucchini en vinagreta.',servings:'4 sándwiches',time:'55 min',difficulty:'Intermedia',
    ingredients:[
      'Pechuga de pollo deshuesada: 560 g',
      'Pan de masa madre: 400 g (8 rebanadas)',
      'Bekis Receta Tradicional: 160 g (escurrido)',
      'Mayonesa comercial: 100 g',
      'Yogur natural sin azúcar: 50 g',
      'Ajo rallado: 5 g',
      'Jugo de limón: 15 g',
      'Rúcula: 50 g',
      'Tomate fresco: 180 g',
      'Queso semimaduro: 100 g',
      'Aceite de oliva: 22 g',
      'Pimentón dulce: 4 g',
      'Sal: 5 g',
      'Pimienta negra: 2 g'
    ],
    steps:[
      'Corta el pollo en cuatro porciones de grosor similar. Sécalo con papel de cocina. Mezcla con 12 g de aceite, pimentón, 4 g de sal y 1 g de pimienta; deja reposar refrigerado 15 minutos.',
      'Mezcla mayonesa, yogur, ajo rallado y jugo de limón. Reserva el alioli suave refrigerado hasta el montaje; no lo dejes a temperatura ambiente durante periodos prolongados.',
      'Calienta una sartén gruesa a fuego medio-alto con 5 g de aceite. Dora el pollo 2 minutos por lado, baja a fuego medio y continúa hasta alcanzar 74 °C en el centro, medido con termómetro de cocina. El tiempo variará según el grosor.',
      'Retira el pollo a una tabla limpia, deja reposar 5 minutos y rebánalo en tiras. Evita reutilizar utensilios que hayan tocado pollo crudo.',
      'Tuesta el pan con los 5 g restantes de aceite. Corta el tomate en rodajas finas y sécalo con papel absorbente. Escurre el zucchini Bekis.',
      'Unta aproximadamente 18–19 g de alioli en cada rebanada. Divide la rúcula, el queso, el pollo, el tomate y 40 g de Bekis entre los cuatro sándwiches.',
      'Cierra, presiona suavemente y corta en diagonal. Sirve inmediatamente; si vas a transportarlos, mantén refrigerados hasta su consumo.'
    ],
    chef:'Control de cocción: el pollo debe alcanzar 74 °C en su parte más gruesa. El zucchini se incorpora al final y no necesita cocción adicional.'
  },
  {
    icon:'🥗',title:'Bowl de quinoa, garbanzos especiados y zucchini picante',variety:'Toque picante',
    desc:'Plato completo de texturas: cereal, legumbres crocantes y vinagreta.',servings:'4 porciones',time:'50 min',difficulty:'Intermedia',
    ingredients:[
      'Quinoa seca: 220 g',
      'Agua para cocción de quinoa: 440 g',
      'Garbanzos cocidos y escurridos: 400 g',
      'Bekis Toque Picante: 160 g (escurrido)',
      'Pepino: 180 g',
      'Tomate cherry: 200 g',
      'Espinaca fresca: 100 g',
      'Aguacate: 200 g (pulpa)',
      'Aceite de oliva: 45 g',
      'Jugo de limón: 30 g',
      'Pimentón ahumado: 5 g',
      'Comino molido: 3 g',
      'Sal: 6 g',
      'Pimienta negra: 2 g',
      'Perejil fresco: 12 g'
    ],
    steps:[
      'Enjuaga la quinoa en un colador fino con agua potable. Colócala en una olla con 440 g de agua y 2 g de sal; lleva a hervor, tapa y cocina a fuego bajo durante 13–15 minutos, o hasta absorber el líquido.',
      'Apaga el fuego, deja reposar tapada 5 minutos y airea con un tenedor. Si se va a servir fría, enfríala rápidamente en una bandeja poco profunda y refrigérala.',
      'Precalienta el horno a 210 °C. Seca muy bien los garbanzos con papel de cocina. Mézclalos con 20 g de aceite, el pimentón, comino, 2 g de sal y 1 g de pimienta.',
      'Hornea los garbanzos en una sola capa durante 22–28 minutos, removiendo a mitad de cocción, hasta que presenten un exterior dorado y ligeramente crujiente.',
      'Lava los vegetales. Corta el pepino en medias lunas, los tomates por la mitad y el aguacate en cubos. Pica finamente el perejil.',
      'Prepara el aderezo batiendo los 25 g restantes de aceite con los 30 g de limón, 2 g de sal y 1 g de pimienta. Mezcla la quinoa con la mitad del aderezo.',
      'Reparte la quinoa y las espinacas en cuatro bowls. Coloca encima garbanzos, pepino, tomate, aguacate y 40 g de Bekis Toque Picante escurrido por ración.',
      'Termina con el aderezo restante y el perejil. Agrega Bekis justo antes de servir para mantener la textura de los ingredientes.'
    ],
    chef:'Servicio: para una presentación más limpia, coloca cada ingrediente en sectores. Ajusta el picante según la intensidad real de la variedad Bekis.'
  }
];
const menu=document.getElementById('menu-toggle');
menu.addEventListener('click',()=>{const open=document.getElementById('nav-links').classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{document.getElementById('nav-links').classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();
// El recetario permanece oculto hasta pulsar el botón VER RECETAS.
const toggleRecipes = document.getElementById('show-recipes');
const hideRecipes = document.getElementById('hide-recipes');
const recipeDrawer = document.getElementById('recetario-detallado');
toggleRecipes.addEventListener('click', () => {
  recipeDrawer.hidden = false;
  toggleRecipes.setAttribute('aria-expanded','true');
  recipeDrawer.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start' });
});
hideRecipes.addEventListener('click', () => {
  recipeDrawer.hidden = true;
  toggleRecipes.setAttribute('aria-expanded','false');
  toggleRecipes.focus();
});
const grid=document.getElementById('recipe-grid');
recipes.forEach((r,i)=>{const article=document.createElement('article');article.className='recipe-card';article.innerHTML=`<div class="recipe-art" aria-hidden="true">${r.icon}</div><div class="recipe-content"><span class="tag">IDEA ${String(i+1).padStart(2,'0')} · ${r.variety.toUpperCase()}</span><h3>${r.title}</h3><p>${r.desc}</p><button type="button">Ver preparación ↗</button></div>`;article.querySelector('button').addEventListener('click',()=>openRecipe(i));grid.append(article);});
const dialog=document.getElementById('recipe-dialog');
function openRecipe(i){
 const r=recipes[i];const root=document.getElementById('dialog-content');root.replaceChildren();
 const heading=document.createElement('p');heading.className='eyebrow';heading.textContent='BEKIS · '+r.variety;
 const title=document.createElement('h2');title.textContent=r.title;
 const meta=document.createElement('p');meta.className='recipe-meta';meta.textContent=`Rendimiento: ${r.servings} · Tiempo total aproximado: ${r.time} · Nivel: ${r.difficulty}`;
 const ingredientsTitle=document.createElement('h3');ingredientsTitle.textContent='Ingredientes (gramos)';
 const list=document.createElement('ul');list.className='recipe-ingredients';
 r.ingredients.forEach(t=>{const li=document.createElement('li');li.textContent=t;list.append(li)});
 const stepsTitle=document.createElement('h3');stepsTitle.textContent='Procedimiento paso a paso';
 const steps=document.createElement('ol');steps.className='recipe-steps';
 r.steps.forEach(t=>{const li=document.createElement('li');li.textContent=t;steps.append(li)});
 const chef=document.createElement('p');chef.className='chef-tip';chef.textContent='Nota de cocina: '+r.chef;
 const disclaimer=document.createElement('p');disclaimer.className='recipe-disclaimer';disclaimer.textContent='Receta editorial de referencia, no validada mediante prueba culinaria ni análisis nutricional. Ajustar gramajes y tiempos según ingredientes y equipos.';
 root.append(heading,title,meta,ingredientsTitle,list,stepsTitle,steps,chef,disclaimer);dialog.showModal();
}
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const whats=document.getElementById('whatsapp-link');
const floatingWhats=document.getElementById('whatsapp-float');

if(/^\d{10,15}$/.test(CONFIG.whatsapp)){whats.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hola, me gustaría conocer las variedades disponibles de Bekis.')}`;whats.target='_blank';whats.rel='noopener noreferrer';floatingWhats.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent('Hola, quiero información sobre Bekis Vegetales Gourmet.')}`;floatingWhats.target='_blank';floatingWhats.rel='noopener noreferrer';floatingWhats.classList.remove('is-unconfigured');floatingWhats.removeAttribute('title');document.getElementById('buy-note').textContent='Escríbenos para consultar disponibilidad y pedidos.';}else{whats.textContent='WhatsApp próximamente';whats.removeAttribute('href');whats.setAttribute('aria-disabled','true');floatingWhats.setAttribute('aria-label','WhatsApp aún no configurado. Ir a contacto');}
const commerce=document.querySelector('.outline-light');if(CONFIG.email){commerce.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent('Consulta comercial Bekis')}`}else{commerce.textContent='Contacto comercial próximamente';commerce.removeAttribute('href');commerce.setAttribute('aria-disabled','true');}
// ICONOS DE REDES SOCIALES BEKIS: se generan desde las URL de CONFIG.socials.
const socialContainer = document.getElementById('social-links');
const socialIcons = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.98H7.9V12h2.54V9.78c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 3.02h-2.34V22A10 10 0 0 0 22 12z"/></svg>`
};
const socialLinks = Object.entries(CONFIG.socials)
  .filter(([name, url]) => socialIcons[name] && /^https:\/\//.test(url));
if (socialContainer && socialLinks.length) {
  socialContainer.replaceChildren();
  socialContainer.classList.add('bekis-socials');
  socialLinks.forEach(([name, url]) => {
    const link = document.createElement('a');
    link.className = 'bekis-social';
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Visitar ${name === 'instagram' ? 'Instagram' : 'Facebook'} de Bekis`);
    link.title = name === 'instagram' ? 'Instagram de Bekis' : 'Facebook de Bekis';
    link.innerHTML = socialIcons[name];
    socialContainer.appendChild(link);
  });
}

