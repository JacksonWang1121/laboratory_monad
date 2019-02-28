package sdibt.group.service.impl;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import sdibt.group.dao.LaboratoryDao;
import sdibt.group.service.ILaboratoryService;
import sdibt.group.util.ExcelUtil;

/**
 * 微官网业务逻辑层
 * @title WebsiteService.java
 * @author JacksonWang
 * @date 2018年9月19日 上午11:20:29
 * @package sdibt.group.service.impl
 * @version 1.0
 *
 */
@Service
public class LaboratoryService implements ILaboratoryService {
	
	@Resource
	private LaboratoryDao laboratoryDao;

	public void setLaboratoryDao(LaboratoryDao laboratoryDao) {
		this.laboratoryDao = laboratoryDao;
	}

	/**
	 * 查询所有实验单
	 * @param
	 * @return
	 */
	@Override
	public List<Map> listLaboratory() {
		return this.laboratoryDao.listLaboratory();
	}

	/**
	 * 导出excel
	 */
	@Override
	public void export() {
		//表头
		String tableTitle="实验单";
		//标题
		String[] heads={"编号","姓名","班级","提交日期","器材","时间","补充说明"};
		//用来生成表格,存储数据
		List<Map<String,Object>> datas=new ArrayList<Map<String,Object>>();
		
		//获取所有实验单
		List<Map> list = this.laboratoryDao.listLaboratory();
		//遍历结果集，向表格中存储数据
		for (Map map : list) {
			datas.add(map);
		}
		
		//打印excel表格
		try {
			ExcelUtil.createExcelSheeet(tableTitle, heads, datas,new FileOutputStream("d:/实验单.xls"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}

}
