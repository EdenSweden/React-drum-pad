# react-drum-pad
Drum pad project made for freeCodeCamp, but made in VS Code. Still in progress.

Personal note for changes needed:
1. Fix audioRef.current & buttonRef.current w/ useEffect and/or useMemo so it doesn't push the entire list of audio files on every render and create an endlessly growing list.
2. Fix drumKitData w/ useEffect so it only renders when state.kitOneIsActive changes.
3. Make volume change dynamically as sound is produced. Maybe add event listener w/ useEffect or fix changeVolume function
4. Fix issues with continued playback after power shutoff
5. Make sure keydown event isn't triggered if power is off
6. Fix bugs with keyup & making the buttons turn back to gray
7. Fix display so it dynamically shows instrument names on keydown, etc.
8. Make app accessible
9. Make adjustments for mobile responsiveness
10. Clean up excessive comments/notes, unused vars, unused context files, etc.
11. Make any needed adjustments to pass freeCodeCamp tests
12. Finishing touches
