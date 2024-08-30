const mi_url = new URL('https://www.google.com/search?q=node+js&sca_esv=f03d7cceb14fcf1a&rlz=1C5CHFA_enPE1102PE1103&ei=_JjQZqDOCcPe5OUPlpWy0Qw&ved=0ahUKEwigvPaSx5qIAxVDL7kGHZaKLMoQ4dUDCBA&uact=5&oq=node+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiB25vZGUganMyEBAAGIAEGLEDGEMYgwEYigUyChAAGIAEGEMYigUyEBAAGIAEGLEDGEMYgwEYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyChAAGIAEGEMYigUyBRAAGIAEMgUQABiABDIFEAAYgARIqBBQiQpY4AxwAngAkAEAmAGxAqAB3AOqAQUyLjMtMbgBA8gBAPgBAZgCBKACuAHCAggQABiABBiwA8ICCRAAGLADGAcYHsICDBAAGIAEGEMYigUYCsICBxAAGIAEGAqYAwCIBgGQBgqSBwE0oAecEQ&sclient=gws-wiz-serp')

console.log(mi_url.protocol);
console.log('----------------');
console.log(mi_url.host);
console.log('----------------');
console.log(mi_url.origin);
console.log('----------------');
console.log(mi_url.hostname);
console.log('----------------');
console.log(mi_url.pathname);
console.log('----------------');
console.log(mi_url.searchParams.get('q'));