### Getting started
- ChakraUI Breakpoint styling is interesting.  It would be nice to get 'base' to be 'desktop' and have an override for a max-width media query.  It seems like this *should* be possible?

- Not clear what the UX on 'mobile' should be.  It seems like a carousel like experience between panes would make the most sense.  I'll start with optimizing for the desktop experience first and revisit this later

- Is there a way to add better type safety around tokens? ie: 
    background="{colors.sand.50}"

- no Figma export permissions

- Why is the '@/path' relative import not working?

### Alterations to design
- Did not have 'Basis Grotesque Pro' font -- used 'sans-serif' instead
- Container header text on mobile is 24px line height and desktop is 20px -- kept 20px everywhere for consistency 
- padding on active 'segmented control' isn't completely consistent.  Kept slightly smaller padding on XL size
- Question: Is the WidgetPanel expected to have a 'maxWidth'?
- Adjusted 'lg' skeleton for transaction panel header alignment to match the real content layout

### Overall workflow plan
- [x] Bootstrap app
- [x] Get some basic components/layout/structure in place
- [x] Start to implement the 'transaction' pane
- [x] Generate random transactions + load via 'API'
- [x] Implement transaction card history
- [x] Implement pending transaction cards
- [x] Implement transaction card status toggle
- [x] Implement skeleton loader
- [x] Get deployment working
- [ ] Revisit mobile panel layout

### Next steps
- Add 'copy' functionality for addresses since they will often be truncated
- Storybook integration for easier design iteration
- Support better 'refresh' or polling for transactions
- Add 'fetchUser' API for greeting
- Component mount/unmount transitions
- Fix favicon
- Revisit mobile panel layout
- Update README
- Add better aria labels for accessibility
