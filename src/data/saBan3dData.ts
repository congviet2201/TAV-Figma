// Central configuration for 121-frame 3D Spin model
export const SA_BAN_3D_FRAMES: string[] = Array.from({ length: 121 }, (_, i) => {
  const num = String(i + 1).padStart(3, '0')
  return `/assets/sa-ban-3d/frame_${num}.webp`
})

export const SA_BAN_3D_CONFIG = {
  totalFrames: 121,
  dragSensitivity: 8, // pixels per frame change
  autoRotateSpeedMs: 90, // ms per frame (~10.8 seconds per full 360° revolution)
  resumeAutoRotateDelayMs: 2500, // wait 2.5s after user drag before auto-rotate resumes
  inertiaDecay: 0.92, // momentum decay per animation frame
}
