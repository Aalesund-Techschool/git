<!-- VS Code-style status bar on every slide except the cover -->
<template>
  <div v-if="$slidev.nav.currentLayout !== 'cover'" class="statusbar">
    <span class="left">⎇ main</span>
    <span class="middle">{{ $slidev.configs.title }}</span>
    <span class="right">Slide {{ $slidev.nav.currentPage }}/{{ $slidev.nav.total }} · UTF-8 · Markdown</span>
  </div>
</template>

<style scoped>
.statusbar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: #8b949e;
  background: #161b22;
  border-top: 1px solid #30363d;
}
.left {
  color: #3fb950;
}
</style>
