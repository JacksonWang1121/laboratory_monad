package sdibt.group.service;

import java.util.List;
import java.util.Map;

/**
 * 微官网业务逻辑接口层
 * @author JacksonWang
 *
 */
public interface ILaboratoryService {

	/**
	 * 查询所有实验单
	 * @param
	 * @return
	 */
	public List<Map> listLaboratory();

	/**
	 * 导出excel
	 */
	public void export();

}
