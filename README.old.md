# react-drum-pad
Drum pad project made for freeCodeCamp, but made in VS Code. Still in progress.

Personal note for changes needed:
1. Fix audioRef.current & buttonRef.current w/ useEffect and/or useMemo so it doesn't push the entire list of audio files on every render and create an endlessly growing list.
2. Make volume change dynamically as sound is produced. Maybe add event listener w/ useEffect or fix changeVolume function
3. Fix issues with continued playback after power shutoff
4. Make sure keydown event isn't triggered if power is off
5. Fix bugs with keyup & making the buttons turn back to gray
6. Fix display so it dynamically shows instrument names on keydown, etc.
7. Make app accessible
8. Make adjustments for mobile responsiveness
9. Clean up excessive comments/notes, unused vars, unused context files, etc.
10. Make any needed adjustments to pass freeCodeCamp tests
11. Finishing touches
