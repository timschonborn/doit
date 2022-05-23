import Item from './Item'

export const generated = ({
  item = {
    id: '1',
    title: 'Test title',
    body: `I'm baby wayfarers everyday carry tote bag cornhole master cleanse air plant lomo fam beard XOXO dreamcatcher deep v. Hot chicken twee af listicle single-origin coffee brunch cliche hammock street art etsy drinking vinegar gastropub migas VHS offal. Fam kickstarter cardigan four loko glossier authentic banh mi kale chips raw denim vice cred tonx. Ramps etsy bushwick fashion axe, pinterest you probably haven't heard of them vinyl sustainable drinking vinegar put a bird on it flannel.`,
    createdAt: Date.now(),
  },
}) => {
  return <Item item={item} />
}

export default { title: 'Components/Item' }
