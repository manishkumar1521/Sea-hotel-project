import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Compass, Sparkles, Wind, Droplets } from 'lucide-react';

interface FloatingBoat3DProps {
  atmosphere?: 'noon' | 'sunset' | 'twilight';
  interactive?: boolean;
  className?: string;
}

const FloatingBoat3D: React.FC<FloatingBoat3DProps> = ({
  atmosphere = 'sunset',
  interactive = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x061426, 0.025);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 3.8, 8.5);
    camera.lookAt(0, 0.8, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 3. Lighting Setup based on Atmosphere
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x38bdf8, 0x082f49, 0.8);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffedd5, 1.8);
    dirLight.position.set(8, 12, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    // Secondary rim / fill light
    const fillLight = new THREE.DirectionalLight(0x06b6d4, 0.9);
    fillLight.position.set(-8, 5, -6);
    scene.add(fillLight);

    // Atmospheric palette update function
    const updateAtmosphereLighting = (mood: 'noon' | 'sunset' | 'twilight') => {
      if (mood === 'noon') {
        dirLight.color.setHex(0xffffff);
        dirLight.intensity = 2.0;
        dirLight.position.set(5, 15, 5);
        ambientLight.color.setHex(0xe0f2fe);
        ambientLight.intensity = 0.8;
        scene.fog = new THREE.FogExp2(0x0284c7, 0.015);
      } else if (mood === 'sunset') {
        dirLight.color.setHex(0xfb923c);
        dirLight.intensity = 2.4;
        dirLight.position.set(12, 6, 8);
        ambientLight.color.setHex(0xffedd5);
        ambientLight.intensity = 0.6;
        scene.fog = new THREE.FogExp2(0x1e1b4b, 0.022);
      } else {
        // twilight
        dirLight.color.setHex(0x93c5fd);
        dirLight.intensity = 1.2;
        dirLight.position.set(-6, 8, -6);
        ambientLight.color.setHex(0x1e293b);
        ambientLight.intensity = 0.4;
        scene.fog = new THREE.FogExp2(0x050c18, 0.035);
      }
    };
    updateAtmosphereLighting(atmosphere);

    // 4. Dynamic Water Mesh
    const waterGeo = new THREE.PlaneGeometry(35, 35, 75, 75);
    waterGeo.rotateX(-Math.PI / 2);

    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.12,
      metalness: 0.85,
      transparent: true,
      opacity: 0.88,
      flatShading: true,
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.y = -0.15;
    waterMesh.receiveShadow = true;
    scene.add(waterMesh);

    // 5. Procedural Luxury Yacht / Boat Model Creation
    const boatGroup = new THREE.Group();

    // Materials
    const hullWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.18,
      metalness: 0.15,
    });

    const hullNavyMat = new THREE.MeshStandardMaterial({
      color: 0x0b192c,
      roughness: 0.25,
      metalness: 0.3,
    });

    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.25,
      metalness: 0.85,
    });

    const teakDeckMat = new THREE.MeshStandardMaterial({
      color: 0xb45309,
      roughness: 0.65,
      metalness: 0.05,
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x082f49,
      roughness: 0.08,
      metalness: 0.95,
      transparent: true,
      opacity: 0.75,
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.1,
      metalness: 0.9,
    });

    const sailMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.5,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });

    // --- Hull Base ---
    // Sleek V-shape lower hull
    const hullShape = new THREE.Shape();
    hullShape.moveTo(0, 1.8); // Bow
    hullShape.quadraticCurveTo(0.9, 0.8, 0.8, -1.8); // Starboard
    hullShape.lineTo(-0.8, -1.8); // Transom / Stern
    hullShape.quadraticCurveTo(-0.9, 0.8, 0, 1.8); // Port

    const extrudeSettings = {
      depth: 0.7,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 2,
      bevelSize: 0.12,
      bevelThickness: 0.12,
    };
    const hullGeo = new THREE.ExtrudeGeometry(hullShape, extrudeSettings);
    hullGeo.rotateX(Math.PI / 2);
    hullGeo.rotateY(Math.PI);
    hullGeo.translate(0, 0.3, 0);

    const hullMesh = new THREE.Mesh(hullGeo, hullWhiteMat);
    hullMesh.castShadow = true;
    hullMesh.receiveShadow = true;
    boatGroup.add(hullMesh);

    // Hull Lower waterline stripe (Navy)
    const lowerHullGeo = new THREE.CylinderGeometry(0.05, 0.65, 3.4, 8);
    lowerHullGeo.rotateX(Math.PI / 2);
    const lowerHullMesh = new THREE.Mesh(lowerHullGeo, hullNavyMat);
    lowerHullMesh.position.set(0, 0.05, 0);
    boatGroup.add(lowerHullMesh);

    // Gold waterline accent
    const stripeGeo = new THREE.TorusGeometry(0.82, 0.02, 6, 24);
    stripeGeo.rotateX(Math.PI / 2);
    stripeGeo.scale(1, 2.2, 1);
    const stripeMesh = new THREE.Mesh(stripeGeo, goldTrimMat);
    stripeMesh.position.set(0, 0.32, 0);
    boatGroup.add(stripeMesh);

    // Teak Main Deck
    const deckGeo = new THREE.BoxGeometry(1.4, 0.05, 3.2);
    const deckMesh = new THREE.Mesh(deckGeo, teakDeckMat);
    deckMesh.position.set(0, 0.42, -0.1);
    deckMesh.receiveShadow = true;
    boatGroup.add(deckMesh);

    // Yacht Cabin / Salon
    const cabinShape = new THREE.Shape();
    cabinShape.moveTo(-0.55, -0.9);
    cabinShape.lineTo(0.55, -0.9);
    cabinShape.lineTo(0.48, 0.7);
    cabinShape.lineTo(-0.48, 0.7);
    cabinShape.closePath();

    const cabinExtrude = {
      depth: 0.48,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.06,
      bevelThickness: 0.06,
    };
    const cabinGeo = new THREE.ExtrudeGeometry(cabinShape, cabinExtrude);
    cabinGeo.rotateX(-Math.PI / 2);
    const cabinMesh = new THREE.Mesh(cabinGeo, hullWhiteMat);
    cabinMesh.position.set(0, 0.45, 0.1);
    cabinMesh.castShadow = true;
    cabinMesh.receiveShadow = true;
    boatGroup.add(cabinMesh);

    // Panoramic Tinted Windshield & Side Windows
    const windshieldGeo = new THREE.BoxGeometry(1.02, 0.28, 0.9);
    const windshieldMesh = new THREE.Mesh(windshieldGeo, glassMat);
    windshieldMesh.position.set(0, 0.72, 0.3);
    windshieldMesh.rotation.x = -0.22;
    boatGroup.add(windshieldMesh);

    // Hardtop / Flybridge Roof
    const roofGeo = new THREE.BoxGeometry(1.15, 0.06, 1.6);
    const roofMesh = new THREE.Mesh(roofGeo, hullWhiteMat);
    roofMesh.position.set(0, 0.95, -0.05);
    roofMesh.castShadow = true;
    boatGroup.add(roofMesh);

    // Radar Arch & Aerial Mast
    const archGeo = new THREE.TorusGeometry(0.55, 0.03, 8, 16, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, chromeMat);
    archMesh.position.set(0, 0.95, -0.65);
    boatGroup.add(archMesh);

    const mastGeo = new THREE.CylinderGeometry(0.018, 0.03, 2.2, 12);
    const mastMesh = new THREE.Mesh(mastGeo, chromeMat);
    mastMesh.position.set(0, 1.8, 0.1);
    boatGroup.add(mastMesh);

    // Billowing Sun Shade / Elegant Sail
    const sailCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 2.8, 0.1),
      new THREE.Vector3(0.6, 1.6, -0.6),
      new THREE.Vector3(0.05, 0.6, -1.3)
    );
    const sailPoints = sailCurve.getPoints(12);
    const sailGeom = new THREE.BufferGeometry().setFromPoints(sailPoints);
    
    // Create triangle sail surface
    const sailShape = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      0, 2.8, 0.05,
      0, 0.6, 0.05,
      0.4, 0.6, -1.2,

      0, 2.8, 0.05,
      0.4, 0.6, -1.2,
      0, 0.6, 0.05,
    ]);
    sailShape.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    sailShape.computeVertexNormals();
    const mainSail = new THREE.Mesh(sailShape, sailMat);
    mainSail.castShadow = true;
    boatGroup.add(mainSail);

    // Navigation Stern Lanterns (Red & Green Port/Starboard Glow)
    const portLightGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const portLightMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const portLight = new THREE.Mesh(portLightGeo, portLightMat);
    portLight.position.set(-0.62, 0.55, 0.4);
    boatGroup.add(portLight);

    const stbdLightGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const stbdLightMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const stbdLight = new THREE.Mesh(stbdLightGeo, stbdLightMat);
    stbdLight.position.set(0.62, 0.55, 0.4);
    boatGroup.add(stbdLight);

    // Stainless Bow Railing
    const bowRailGeo = new THREE.TorusGeometry(0.65, 0.015, 6, 16, Math.PI * 0.9);
    bowRailGeo.rotateX(Math.PI / 2);
    const bowRailMesh = new THREE.Mesh(bowRailGeo, chromeMat);
    bowRailMesh.position.set(0, 0.58, 0.95);
    boatGroup.add(bowRailMesh);

    // Stern Swim Deck & Ladder
    const swimDeckGeo = new THREE.BoxGeometry(1.2, 0.04, 0.4);
    const swimDeckMesh = new THREE.Mesh(swimDeckGeo, teakDeckMat);
    swimDeckMesh.position.set(0, 0.22, -1.85);
    boatGroup.add(swimDeckMesh);

    // Initial Boat Position & Scale
    boatGroup.scale.set(1.15, 1.15, 1.15);
    boatGroup.position.set(0, 0.1, 0);
    scene.add(boatGroup);

    // 6. Floating Wake & Water Spray Particle Ring
    const particleCount = 40;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: { x: number; y: number; z: number; age: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 2.2;
      particlePositions[i * 3 + 1] = 0;
      particlePositions[i * 3 + 2] = -1.2 - Math.random() * 2.5;
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: Math.random() * 0.01,
        z: -0.02 - Math.random() * 0.03,
        age: Math.random() * 100,
      });
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe0f2fe,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const wakeParticles = new THREE.Points(particlesGeo, particleMat);
    scene.add(wakeParticles);

    // 7. Mouse Parallax & Interactive Orbit
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = 0.35;
    let isDragging = false;
    let previousMouseX = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / height) * 2 - 1);

      if (isDragging) {
        const deltaX = event.clientX - previousMouseX;
        targetRotationY += deltaX * 0.01;
        previousMouseX = event.clientX;
      }
    };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMouseX = event.clientX;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // 8. Animation & Buoyancy Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const positionAttr = waterGeo.attributes.position;
    const basePositions = positionAttr.array.slice() as Float32Array;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Animate 3D Water Waves
      for (let i = 0; i < positionAttr.count; i++) {
        const u = basePositions[i * 3];
        const v = basePositions[i * 3 + 2];
        const wave1 = Math.sin(u * 0.6 + time * 1.8) * 0.12;
        const wave2 = Math.cos(v * 0.5 + time * 1.4) * 0.1;
        const wave3 = Math.sin((u + v) * 0.4 + time * 2.2) * 0.06;
        positionAttr.setY(i, wave1 + wave2 + wave3);
      }
      positionAttr.needsUpdate = true;
      waterGeo.computeVertexNormals();

      // Real-Time Floating Boat Physics (Heave, Roll, Pitch, Yaw)
      const boatWaveHeight = Math.sin(time * 1.8) * 0.08 + Math.cos(time * 1.4) * 0.05;
      const boatRoll = Math.sin(time * 1.2) * 0.08 + Math.cos(time * 1.6) * 0.04;
      const boatPitch = Math.cos(time * 1.5) * 0.05;
      const boatSway = Math.sin(time * 0.8) * 0.03;

      boatGroup.position.y = 0.08 + boatWaveHeight;
      boatGroup.rotation.z = boatRoll;
      boatGroup.rotation.x = boatPitch;

      // Rotation & Camera Glide
      if (autoRotate && !isDragging) {
        boatGroup.rotation.y = targetRotationY + Math.sin(time * 0.4) * 0.25;
      } else {
        boatGroup.rotation.y = THREE.MathUtils.lerp(boatGroup.rotation.y, targetRotationY, 0.05);
      }

      // Gentle camera mouse parallax
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX * 1.2, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 3.8 + mouseY * 0.8, 0.05);
      camera.lookAt(0, 0.8, 0);

      // Animate wake spray particles
      const positions = particlesGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 2] -= 0.018;
        positions[i * 3 + 1] = Math.sin(time * 3 + i) * 0.03;
        particleVelocities[i].age += 1;

        if (positions[i * 3 + 2] < -5 || particleVelocities[i].age > 80) {
          positions[i * 3] = (Math.random() - 0.5) * 1.4;
          positions[i * 3 + 1] = 0;
          positions[i * 3 + 2] = -0.5 - Math.random() * 0.8;
          particleVelocities[i].age = 0;
        }
      }
      particlesGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.dispose();
    };
  }, [atmosphere, autoRotate]);

  return (
    <div 
      className={`relative rounded-3xl overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas Container */}
      <div 
        ref={containerRef} 
        className="w-full h-full min-h-[360px] sm:min-h-[460px] cursor-grab active:cursor-grabbing select-none"
      />

      {/* Floating 3D Interactive Controls & Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <div className="glass-panel-dark px-3 py-1.5 rounded-full flex items-center gap-2 border border-cyan-500/30 text-xs text-white shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="font-serif font-bold text-amber-300">Sea Breeze 65' Luxury Yacht</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded-full glass-panel-dark border transition-all text-xs flex items-center gap-1.5 ${
            autoRotate 
              ? 'border-cyan-400 text-cyan-300 shadow-cyan-glow' 
              : 'border-white/20 text-slate-300 hover:text-white'
          }`}
          title={autoRotate ? "Pause Auto Rotation" : "Enable Auto Rotation"}
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span className="hidden sm:inline text-[11px] font-medium">3D Orbit</span>
        </button>
      </div>

      {/* Interactive Helper Overlay (appears on hover) */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 glass-panel-dark px-4 py-2.5 rounded-2xl border border-white/10 text-xs text-slate-300 pointer-events-none sm:pointer-events-auto">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-cyan-300 font-medium">
            <Compass className="w-3.5 h-3.5" /> Interactive 3D Model
          </span>
          <span className="hidden md:inline text-slate-400">· Click & drag to rotate 360°</span>
        </div>
        <div className="flex items-center gap-3 text-slate-300 text-[11px]">
          <span className="flex items-center gap-1">
            <Droplets className="w-3 h-3 text-cyan-400" /> Wave Physics Enabled
          </span>
          <span className="flex items-center gap-1 text-amber-300">
            <Sparkles className="w-3 h-3" /> Private Charter Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default FloatingBoat3D;
