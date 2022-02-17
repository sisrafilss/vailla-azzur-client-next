import styles from '../../styles/OurMenu.module.css';
import SingleMenu from './singleMenu';


function MenuDetail({menuList}) {
  return (
    <div className={styles.tab_content}>
            <div role="tabpanel" className="tab-pane active" id="lunch">
              <div className="row">
                <div className="col-md-6">
                  <ul className={styles.menu_list_items}>
                    {menuList
                      .slice(0, Math.floor(menuList.length / 2))
                      .map((menu) => (
                        <SingleMenu key={menu.id} menu={menu} />
                      ))}
                  </ul>
                </div>

                <div className="col-md-6">
                  <ul className={styles.menu_list_items}>
                    {menuList
                      .slice(Math.floor(menuList.length / 2), menuList.length)
                      .map((menu) => (
                        <SingleMenu key={menu.id} menu={menu} />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
  );
}

export default MenuDetail;
