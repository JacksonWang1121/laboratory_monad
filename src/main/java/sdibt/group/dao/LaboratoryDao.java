package sdibt.group.dao;

import java.util.List;
import java.util.Map;

/**
 * 实验单数据操作接口层
 * @author JacksonWang
 * @date 2018年9月19日 上午11:22:07
 * @package sdibt.group.dao
 * @version 1.0
 *
 */
public interface LaboratoryDao {
	
	/**
	 * 查询所有实验单
	 * @param
	 * @return
	 */
	public List<Map> listLaboratory();

	/**
	 * 添加实验单
	 * @param monad
	 */
	public void saveMonad(Map monad);

}
