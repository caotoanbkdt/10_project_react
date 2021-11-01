import Item from './Item';

function ListItem(props) {
  const onCheckHandler = (id, check) => {
    props.onCheckHandler(id, check);
  };
  const listItemEl =
    props.listItems.length > 0 &&
    props.listItems.map((item) => (
      <Item key={item.id} item={item} id={item.id} checked={onCheckHandler} />
    ));
  return <ul>{listItemEl}</ul>;
}

export default ListItem;
