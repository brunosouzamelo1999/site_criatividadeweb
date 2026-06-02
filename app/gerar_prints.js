import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

(async () => {
  const printsDir = path.join(process.cwd(), '..', 'Prints_Site');
  if (!fs.existsSync(printsDir)) {
    fs.mkdirSync(printsDir);
  }

  console.log('Iniciando o navegador...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to a nice desktop size
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Acessando o site local...');
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  } catch (error) {
    console.error('ERRO: Não foi possível acessar http://localhost:5173. O servidor Vite está rodando?');
    await browser.close();
    process.exit(1);
  }

  // Disable smooth scrolling and force AOS animations to be visible
  await page.evaluate(() => {
    // Disable animations
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        transition: none !important;
        animation: none !important;
        scroll-behavior: auto !important;
      }
      [data-aos] {
        opacity: 1 !important;
        transform: none !important;
      }
    `;
    document.head.appendChild(style);
  });

  // Give it a second to render
  await new Promise(resolve => setTimeout(resolve, 1000));

  const sections = [
    { id: '#hero', name: '01_Hero.png' },
    { id: '#servicos', name: '02_Servicos.png' },
    { id: '#portfolio', name: '03_Portfolio.png' },
    { id: '#processo', name: '04_Processo.png' },
    { id: '#contato', name: '05_Contato.png' }
  ];

  for (const section of sections) {
    console.log(`Tirando print da seção: ${section.id}`);
    const element = await page.$(section.id);
    if (element) {
      await element.screenshot({ path: path.join(printsDir, section.name) });
    } else {
      console.log(`Aviso: Seção ${section.id} não encontrada.`);
    }
  }

  console.log('Tirando print da página inteira (Full Page)...');
  await page.screenshot({ path: path.join(printsDir, '00_Pagina_Completa.png'), fullPage: true });

  await browser.close();
  console.log(`✅ Todos os prints foram salvos na pasta: ${printsDir}`);
})();
