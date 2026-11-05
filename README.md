# Montevideo Burguer

Aplicação React + Vite + TypeScript, Tailwind CSS e lucide-react, adaptada do template fornecido pelo usuário. Fontes Anton, Teko e Inter locais; sem chaves de API ou serviços externos necessários para executar.

## Executar

Requisitos: Node.js 24 e npm 11 (validados neste ambiente).

```sh
npm ci --no-audit --no-fund
npm run dev
```

O servidor usa a porta 5173. O ambiente já é isolado: use este checkout, sem criar worktrees.

## Verificações

```sh
npm run typecheck
npm run build
npm exec vite preview -- --host 0.0.0.0 --port 5174
```

Verificados com Chromium: larguras 360, 390, 768, 1024 e 1440 px; imagens e fontes locais; ausência de rolagem horizontal; menu mobile e Escape; pausa da galeria; reprodução, áudio mudo e pausa do vídeo; preferência de movimento reduzido; ausência de erros de navegador e recursos com HTTP 4xx/5xx.

Não há suíte automatizada de testes herdada. O template citava scripts de UI que não estavam no ZIP.

## Vídeo de preparo

Arquivo local `public/assets/preparo.mp4` (H.264, 1280×720, aproximadamente 535 KiB, 7,57 segundos, sem áudio). Exibido abaixo da abertura, na seção de preparo, em loop e somente quando visível. Com movimento reduzido, inicia pausado; há controle manual. Poster local para evitar tela vazia.

Fonte: **Burgers on the Grill**, de **RDNE Stock project**, no Pexels:
https://www.pexels.com/video/burgers-on-the-grill-8522934/

Licença consultada: https://www.pexels.com/license/ — uso gratuito, incluindo em websites; não implica vínculo ou endosso. O clipe é ilustrativo, não uma gravação da Montevideo.

Arquivo original: https://videos.pexels.com/video-files/8522934/8522934-hd_1920_1080_30fps.mp4

## Imagens e identidade

As fotos de hambúrgueres são fotografias do Pexels e substituem os renders e embalagens do template. São fotos ilustrativas de banco, não fotos confirmadas dos produtos da Montevideo. Fontes e fundos decorativos vêm do template fornecido. Não foram inventados preços, ingredientes ou avaliações. Os contatos e horários foram fornecidos no texto de referência, sem verificação externa da bio do Instagram.

## Estrutura

- `src/Hero.tsx`: composição visual da abertura original.
- `src/App.tsx`: seções, contatos e vídeo.
- `src/components/ui/image-auto-slider.tsx`: galeria contínua com pausa.
- `src/montevideo.css`: estilos da adaptação e acessibilidade de movimento.
- `public/assets`: arquivos locais, sem dependência de CDNs em runtime.

A publicação do ambiente e do site não foi realizada por estes comandos.

## Créditos das fotografias

Todas sob a licença Pexels: https://www.pexels.com/license/

- `15010285.jpg` — Natan Machado Fotografia Gastronômica: https://www.pexels.com/photo/delicious-burgers-on-wooden-boards-on-table-15010285/
- `5374420.jpg` — Engin Akyurt: https://www.pexels.com/photo/burger-sliced-in-half-5374420/
- `4749403.jpg` — Fernando Martinez: https://www.pexels.com/photo/person-holding-hamburger-4749403/
- `4628466.jpg` — taha balta: https://www.pexels.com/photo/close-up-photography-of-a-burger-4628466/
- `4253700.jpg` — cottonbro studio: https://www.pexels.com/photo/burger-on-brown-wooden-chopping-board-4253700/
- `8162589.jpg` — Vinícius Caricatte: https://www.pexels.com/photo/close-up-shot-of-beef-burgers-8162589/
- `7786564.jpg` — Andrei Marina: https://www.pexels.com/photo/burger-with-patty-and-fries-7786564/
