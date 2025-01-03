### Getting started
- Breakpoint styling is interesting.  It would be nice to get 'base' to be 'desktop' and have an override for a max-width media query.  It seems like this *should* be possible?

- Not clear what the UX on 'mobile' should be.  It seems like a carousel like experience between panes would make the most sense.  I'll start with optimizing for the desktop experience first and revisit this later

- Is there a way to add better type safety around tokens? ie: 
    background="{colors.sand.50}"




### Alterations to design
- Did not have 'Basis Grotesque Pro' font -- used 'sans-serif' instead
- Container header on mobile is 24px line height and desktop is 20px -- kept 20px everywhere for consistency 

### Overall workflow plan
- Bootstrap app
- Get some basic components/layout/structure in place
- Start to implement the 'transaction' pane
- Generate random transactions + load via 'API'
- Implement transaction card history
- Implement pending transaction cards
- Implement transaction card status toggle
- Implement skeleton loader
- Get deployment working
- Revisit mobile panel layout