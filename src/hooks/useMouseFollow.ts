"use client";

import { useState, useCallback } from "react";

interface MouseFollowState {
  /** 0..1 normalized position within element */
  x: number;
  y: number;
  /** -1..1 relative to center */
  relX: number;
  relY: number;
  /** degrees for 3D tilt (Balatro-style) */
  tiltX: number;
  tiltY: number;
  /** angle in degrees for shine gradient */
  shineAngle: number;
  /** distance from center (0..1) for glow intensity */
  intensity: number;
  /** is the mouse currently over the element */
  hovering: boolean;
}

const TILT_AMOUNT = 18; // max tilt degrees
const BOB_DURATION = 10; // idle bob cycle seconds

export function useMouseFollow() {
  const [state, setState] = useState<MouseFollowState>({
    x: 0.5,
    y: 0.5,
    relX: 0,
    relY: 0,
    tiltX: 0,
    tiltY: 0,
    shineAngle: 135,
    intensity: 0,
    hovering: false,
  });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const relX = x * 2 - 1; // -1..1
    const relY = y * 2 - 1; // -1..1
    const intensity = Math.sqrt(relX * relX + relY * relY); // distance from center
    const shineAngle = Math.atan2(relY, relX) * (180 / Math.PI) - 90;

    setState({
      x,
      y,
      relX,
      relY,
      tiltX: -relY * TILT_AMOUNT,
      tiltY: relX * TILT_AMOUNT,
      shineAngle,
      intensity: Math.min(intensity, 1),
      hovering: true,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    // Animate back to flat (toggle a return animation via CSS)
    setState((prev) => ({
      ...prev,
      x: 0.5,
      y: 0.5,
      relX: 0,
      relY: 0,
      tiltX: 0,
      tiltY: 0,
      intensity: 0,
      hovering: false,
    }));
  }, []);

  return { state, onMouseMove, onMouseLeave, TILT_AMOUNT, BOB_DURATION };
}
