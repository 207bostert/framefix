const CPUS = [
  { id: "i3-10100f", name: "Intel Core i3-10100F", score: 42 },
  { id: "i5-10400f", name: "Intel Core i5-10400F", score: 50 },
  { id: "i5-11400f", name: "Intel Core i5-11400F", score: 58 },
  { id: "i5-12400f", name: "Intel Core i5-12400F", score: 72 },
  { id: "i5-13400f", name: "Intel Core i5-13400F", score: 82 },
  { id: "i5-13600k", name: "Intel Core i5-13600K", score: 98 },
  { id: "i5-14600k", name: "Intel Core i5-14600K", score: 104 },
  { id: "i7-12700k", name: "Intel Core i7-12700K", score: 94 },
  { id: "i7-13700k", name: "Intel Core i7-13700K", score: 106 },
  { id: "i7-14700k", name: "Intel Core i7-14700K", score: 112 },
  { id: "i9-14900k", name: "Intel Core i9-14900K", score: 120 },
  { id: "r5-3600", name: "AMD Ryzen 5 3600", score: 50 },
  { id: "r5-5600", name: "AMD Ryzen 5 5600", score: 64 },
  { id: "r5-7600", name: "AMD Ryzen 5 7600", score: 89 },
  { id: "r5-9600x", name: "AMD Ryzen 5 9600X", score: 105 },
  { id: "r7-5700x3d", name: "AMD Ryzen 7 5700X3D", score: 84 },
  { id: "r7-5800x3d", name: "AMD Ryzen 7 5800X3D", score: 89 },
  { id: "r7-7700x", name: "AMD Ryzen 7 7700X", score: 99 },
  { id: "r7-7800x3d", name: "AMD Ryzen 7 7800X3D", score: 121 },
  { id: "r7-9800x3d", name: "AMD Ryzen 7 9800X3D", score: 140 }
];

const GPUS = [
  { id: "gtx-1650", name: "NVIDIA GeForce GTX 1650", score: 25 },
  { id: "gtx-1660-super", name: "NVIDIA GeForce GTX 1660 Super", score: 38 },
  { id: "rtx-2060", name: "NVIDIA GeForce RTX 2060", score: 45 },
  { id: "rtx-3060", name: "NVIDIA GeForce RTX 3060", score: 58 },
  { id: "rtx-3060-ti", name: "NVIDIA GeForce RTX 3060 Ti", score: 69 },
  { id: "rtx-4060", name: "NVIDIA GeForce RTX 4060", score: 65 },
  { id: "rtx-4060-ti", name: "NVIDIA GeForce RTX 4060 Ti", score: 77 },
  { id: "rtx-4070", name: "NVIDIA GeForce RTX 4070", score: 100 },
  { id: "rtx-4070-super", name: "NVIDIA GeForce RTX 4070 Super", score: 112 },
  { id: "rtx-4070-ti-super", name: "NVIDIA GeForce RTX 4070 Ti Super", score: 135 },
  { id: "rtx-4080-super", name: "NVIDIA GeForce RTX 4080 Super", score: 160 },
  { id: "rtx-4090", name: "NVIDIA GeForce RTX 4090", score: 200 },
  { id: "rx-6600", name: "AMD Radeon RX 6600", score: 50 },
  { id: "rx-6700-xt", name: "AMD Radeon RX 6700 XT", score: 72 },
  { id: "rx-7600", name: "AMD Radeon RX 7600", score: 62 },
  { id: "rx-7700-xt", name: "AMD Radeon RX 7700 XT", score: 92 },
  { id: "rx-7800-xt", name: "AMD Radeon RX 7800 XT", score: 108 },
  { id: "rx-7900-gre", name: "AMD Radeon RX 7900 GRE", score: 119 },
  { id: "rx-7900-xt", name: "AMD Radeon RX 7900 XT", score: 145 },
  { id: "rx-7900-xtx", name: "AMD Radeon RX 7900 XTX", score: 165 },
  { id: "arc-a750", name: "Intel Arc A750", score: 55 },
  { id: "arc-b580", name: "Intel Arc B580", score: 72 }
];

const GAMES = [
  { id: "beamng", name: "BeamNG.drive", base: 112, cpuWeight: .66, gpuWeight: .34, cpuNeed: 1.14, gpuNeed: .92, ramNeed: 16, scaling: "simulation", tips: [["Traffic", "4–6 vehicles"], ["Shadows", "Normal"], ["Reflections", "Dynamic / Low"]] },
  { id: "valorant", name: "VALORANT", base: 335, cpuWeight: .77, gpuWeight: .23, cpuNeed: 1.08, gpuNeed: .55, ramNeed: 8, scaling: "esports", tips: [["Multithreaded Rendering", "On"], ["Material Quality", "Low"], ["NVIDIA Reflex", "On + Boost"]] },
  { id: "cs2", name: "Counter-Strike 2", base: 235, cpuWeight: .68, gpuWeight: .32, cpuNeed: 1.08, gpuNeed: .72, ramNeed: 16, scaling: "esports", tips: [["Boost Player Contrast", "On"], ["Ambient Occlusion", "Medium"], ["FSR", "Disabled"]] },
  { id: "fortnite", name: "Fortnite", base: 155, cpuWeight: .51, gpuWeight: .49, cpuNeed: 1.0, gpuNeed: 1.0, ramNeed: 16, scaling: "competitive", tips: [["Rendering Mode", "DirectX 12"], ["Nanite", "Off"], ["View Distance", "Far"]] },
  { id: "minecraft", name: "Minecraft: Java Edition", base: 260, cpuWeight: .82, gpuWeight: .18, cpuNeed: 1.12, gpuNeed: .45, ramNeed: 8, scaling: "esports", tips: [["Render Distance", "12–16 chunks"], ["Simulation Distance", "8 chunks"], ["Performance Mod", "Sodium"]] },
  { id: "gta-v", name: "Grand Theft Auto V", base: 150, cpuWeight: .42, gpuWeight: .58, cpuNeed: .72, gpuNeed: .78, ramNeed: 8, scaling: "standard", tips: [["MSAA", "Off"], ["Grass Quality", "High"], ["Advanced Graphics", "Off"]] },
  { id: "cyberpunk", name: "Cyberpunk 2077 (no RT)", base: 92, cpuWeight: .27, gpuWeight: .73, cpuNeed: .88, gpuNeed: 1.22, ramNeed: 16, scaling: "cinematic", tips: [["Crowd Density", "Medium"], ["Screen Space Reflections", "High"], ["Volumetric Fog", "Medium"]] },
  { id: "rdr2", name: "Red Dead Redemption 2", base: 96, cpuWeight: .3, gpuWeight: .7, cpuNeed: .82, gpuNeed: 1.14, ramNeed: 16, scaling: "cinematic", tips: [["Texture Quality", "Ultra"], ["Water Physics", "50%"], ["Tree Tessellation", "Off"]] },
  { id: "re4", name: "Resident Evil 4 Remake", base: 125, cpuWeight: .31, gpuWeight: .69, cpuNeed: .78, gpuNeed: 1.02, ramNeed: 16, scaling: "standard", tips: [["Texture Quality", "High (2 GB)"], ["Hair Strands", "Off"], ["Volumetric Lighting", "Medium"]] },
  { id: "ets2", name: "Euro Truck Simulator 2", base: 145, cpuWeight: .68, gpuWeight: .32, cpuNeed: 1.06, gpuNeed: .68, ramNeed: 8, scaling: "simulation", tips: [["Scaling", "100–200%"], ["Mirrors", "Medium"], ["Vegetation Detail", "High"]] },
  { id: "warzone", name: "Call of Duty: Warzone", base: 132, cpuWeight: .47, gpuWeight: .53, cpuNeed: 1.02, gpuNeed: 1.08, ramNeed: 16, scaling: "competitive", tips: [["Texture Resolution", "Normal"], ["Spot Cache", "High"], ["On-Demand Streaming", "Off"]] },
  { id: "apex", name: "Apex Legends", base: 185, cpuWeight: .49, gpuWeight: .51, cpuNeed: .92, gpuNeed: .92, ramNeed: 16, scaling: "competitive", tips: [["Texture Streaming Budget", "Match VRAM"], ["Sun Shadow Coverage", "Low"], ["Model Detail", "High"]] },
  { id: "forza5", name: "Forza Horizon 5", base: 128, cpuWeight: .28, gpuWeight: .72, cpuNeed: .8, gpuNeed: 1.04, ramNeed: 16, scaling: "standard", tips: [["Environment Texture", "High"], ["MSAA", "2x"], ["Shader Quality", "High"]] },
  { id: "hogwarts", name: "Hogwarts Legacy", base: 86, cpuWeight: .35, gpuWeight: .65, cpuNeed: .98, gpuNeed: 1.16, ramNeed: 16, scaling: "cinematic", tips: [["View Distance", "High"], ["Fog Quality", "Medium"], ["Ray Tracing", "Off"]] },
  { id: "the-witcher-3", name: "The Witcher 3 Next-Gen (no RT)", base: 108, cpuWeight: .31, gpuWeight: .69, cpuNeed: .82, gpuNeed: 1.08, ramNeed: 16, scaling: "cinematic", tips: [["HairWorks", "Geralt only"], ["Foliage Visibility", "High"], ["Background Characters", "High"]] }
];

const PRESETS = [
  { id: "low", label: "Low", multiplier: 1.28 },
  { id: "balanced", label: "Balanced", multiplier: 1.0 },
  { id: "high", label: "High", multiplier: .82 },
  { id: "ultra", label: "Ultra", multiplier: .66 }
];

const resolutionScale = { "1080": 1, "1440": .73, "2160": .43 };
const ramScale = { "8": .9, "16": 1, "32": 1.035, "64": 1.04 };

const els = {
  form: document.querySelector("#config-form"),
  game: document.querySelector("#game"),
  cpu: document.querySelector("#cpu"),
  gpu: document.querySelector("#gpu"),
  ram: document.querySelector("#ram"),
  target: document.querySelector("#target"),
  resultTitle: document.querySelector("#result-title"),
  fpsValue: document.querySelector("#fps-value"),
  targetStatus: document.querySelector("#target-status"),
  chart: document.querySelector("#preset-chart"),
  bottleneckTitle: document.querySelector("#bottleneck-title"),
  bottleneckCopy: document.querySelector("#bottleneck-copy"),
  bottleneckScore: document.querySelector("#bottleneck-score"),
  recommendationTitle: document.querySelector("#recommendation-title"),
  recommendationCopy: document.querySelector("#recommendation-copy"),
  settingsGame: document.querySelector("#settings-game"),
  tips: document.querySelector("#settings-tips")
};

function addOptions(select, items, selectedId) {
  select.innerHTML = items.map(item => `<option value="${item.id}" ${item.id === selectedId ? "selected" : ""}>${item.name}</option>`).join("");
}

function selectedResolution() {
  return document.querySelector('input[name="resolution"]:checked').value;
}

function getById(items, id) {
  return items.find(item => item.id === id) || items[0];
}

function estimate(config) {
  const game = getById(GAMES, config.game);
  const cpu = getById(CPUS, config.cpu);
  const gpu = getById(GPUS, config.gpu);
  const cpuRatio = cpu.score / 82;
  const gpuRatio = gpu.score / 77;
  const memoryPressure = Number(config.ram) < game.ramNeed ? .78 : ramScale[config.ram];
  const resFactor = resolutionScale[config.resolution];

  const cpuContribution = Math.pow(cpuRatio / game.cpuNeed, game.cpuWeight);
  const gpuContribution = Math.pow(gpuRatio / game.gpuNeed, game.gpuWeight) * Math.pow(resFactor, game.gpuWeight);
  const base = game.base * cpuContribution * gpuContribution * memoryPressure;

  const values = PRESETS.map(preset => {
    const presetCurve = game.scaling === "esports" ? .55 + preset.multiplier * .45 : preset.multiplier;
    const mid = Math.max(12, Math.round(base * presetCurve));
    return { ...preset, mid, low: Math.max(8, Math.round(mid * .86)), high: Math.round(mid * 1.12) };
  });

  const target = Number(config.target);
  const recommended = [...values].reverse().find(item => item.low >= target * .9) || values[0];

  const cpuHeadroom = cpuRatio / game.cpuNeed;
  const gpuHeadroom = (gpuRatio * resFactor) / game.gpuNeed;
  const delta = Math.round(Math.abs(cpuHeadroom - gpuHeadroom) / Math.max(cpuHeadroom, gpuHeadroom) * 100);
  let bottleneck;
  if (Number(config.ram) < game.ramNeed) {
    bottleneck = { title: "Memory capacity", score: `${Math.max(18, game.ramNeed - Number(config.ram) + 12)}%`, copy: `${game.name} benefits from at least ${game.ramNeed} GB. Low memory may cause stutter.` };
  } else if (delta < 16) {
    bottleneck = { title: "Balanced system", score: `${delta}%`, copy: "The CPU and GPU are closely matched for this workload." };
  } else if (cpuHeadroom < gpuHeadroom) {
    bottleneck = { title: "CPU-limited", score: `${delta}%`, copy: `${game.name} is likely waiting on CPU performance at this resolution.` };
  } else {
    bottleneck = { title: "GPU-limited", score: `${delta}%`, copy: "The graphics card is the likely limit at this preset and resolution." };
  }

  return { game, cpu, gpu, values, recommended, bottleneck, target };
}

function statusText(mid, target) {
  if (mid >= target * 1.15) return `Comfortably above your ${target} FPS target`;
  if (mid >= target * .9) return `Near your ${target} FPS target`;
  return `Below your ${target} FPS target`;
}

function render(result) {
  const active = result.recommended;
  els.resultTitle.textContent = `${active.label} preset`;
  els.fpsValue.textContent = `${active.low}–${active.high}`;
  els.targetStatus.textContent = statusText(active.mid, result.target);
  els.targetStatus.style.color = active.mid >= result.target * .9 ? "var(--accent-2)" : "var(--warning)";
  els.targetStatus.style.borderColor = active.mid >= result.target * .9 ? "rgba(124,231,187,.15)" : "rgba(255,204,102,.18)";
  els.targetStatus.style.background = active.mid >= result.target * .9 ? "rgba(124,231,187,.08)" : "rgba(255,204,102,.08)";

  const max = Math.max(...result.values.map(item => item.high));
  els.chart.innerHTML = result.values.map(item => `
    <div class="bar-row ${item.id === active.id ? "recommended" : ""}">
      <span class="bar-label">${item.label}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(8, Math.round(item.mid / max * 100))}%"></div></div>
      <span class="bar-value">${item.low}–${item.high}</span>
    </div>`).join("");

  els.bottleneckTitle.textContent = result.bottleneck.title;
  els.bottleneckCopy.textContent = result.bottleneck.copy;
  els.bottleneckScore.textContent = result.bottleneck.score;
  els.recommendationTitle.textContent = `Use ${active.label}`;
  els.recommendationCopy.textContent = active.id === "low"
    ? "Prioritize responsiveness; consider upscaling if the game supports it."
    : `Best visual quality while aiming for a stable ${result.target} FPS experience.`;
  els.settingsGame.textContent = `for ${result.game.name}`;
  els.tips.innerHTML = result.game.tips.map(([label, value]) => `<li><span>${label}</span><strong>${value}</strong></li>`).join("");
}

function currentConfig() {
  return {
    game: els.game.value,
    cpu: els.cpu.value,
    gpu: els.gpu.value,
    ram: els.ram.value,
    target: els.target.value,
    resolution: selectedResolution()
  };
}

function calculate(config = currentConfig(), updateForm = false) {
  if (updateForm) {
    if (getById(GAMES, config.game)) els.game.value = config.game;
    if (getById(CPUS, config.cpu)) els.cpu.value = config.cpu;
    if (getById(GPUS, config.gpu)) els.gpu.value = config.gpu;
    if (ramScale[String(config.ram)]) els.ram.value = String(config.ram);
    if ([60, 120, 144, 240].includes(Number(config.target))) els.target.value = String(config.target);
    const resolutionInput = document.querySelector(`input[name="resolution"][value="${config.resolution}"]`);
    if (resolutionInput) resolutionInput.checked = true;
  }
  const result = estimate(currentConfig());
  render(result);
  return {
    game: result.game.name,
    estimatedFps: { low: result.recommended.low, high: result.recommended.high },
    recommendedPreset: result.recommended.label,
    likelyBottleneck: result.bottleneck.title
  };
}

addOptions(els.game, GAMES, "beamng");
addOptions(els.cpu, CPUS, "i5-12400f");
addOptions(els.gpu, GPUS, "rtx-4060-ti");
document.querySelector("#year").textContent = new Date().getFullYear();

els.form.addEventListener("submit", event => {
  event.preventDefault();
  calculate();
});

els.form.addEventListener("change", () => calculate());
calculate();

function registerWebMcpTool() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  try {
    void Promise.resolve(context.registerTool({
      name: "estimate_pc_game_performance",
      title: "Estimate PC game performance",
      description: "Configure FrameFix with supported hardware and return the estimated FPS range, recommended preset and likely bottleneck.",
      inputSchema: {
        type: "object",
        properties: {
          game: { type: "string", enum: GAMES.map(item => item.id) },
          cpu: { type: "string", enum: CPUS.map(item => item.id) },
          gpu: { type: "string", enum: GPUS.map(item => item.id) },
          ram: { type: "number", enum: [8, 16, 32, 64] },
          resolution: { type: "string", enum: ["1080", "1440", "2160"] },
          target: { type: "number", enum: [60, 120, 144, 240] }
        },
        required: ["game", "cpu", "gpu", "ram", "resolution", "target"],
        additionalProperties: false
      },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const valid = input && GAMES.some(x => x.id === input.game) && CPUS.some(x => x.id === input.cpu) && GPUS.some(x => x.id === input.gpu) && ramScale[String(input.ram)] && ["1080", "1440", "2160"].includes(input.resolution) && [60, 120, 144, 240].includes(input.target);
        if (!valid) throw new Error("Unsupported FrameFix configuration.");
        return calculate(input, true);
      }
    })).catch(() => {});
  } catch (_) {}
}

registerWebMcpTool();
