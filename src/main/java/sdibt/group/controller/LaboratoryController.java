package sdibt.group.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import sdibt.group.service.ILaboratoryService;

/**
 * 实验单控制层
 * @author JacksonWang
 * @date 2018年9月19日 上午11:31:58
 * @package sdibt.group.controller
 * @version 1.0
 *
 */
@Controller
@RequestMapping("/laboratory")
public class LaboratoryController {
	
	@Resource
	private ILaboratoryService laboratoryService;

	public void setLaboratoryService(ILaboratoryService laboratoryService) {
		this.laboratoryService = laboratoryService;
	}

	/**
	 * 查询所有实验单
	 */
	@RequestMapping("/listLaboratory")
	@ResponseBody
	public List<Map> listLaboratory() {
		return this.laboratoryService.listLaboratory();
	}
	
	/**
	 * 导出Excel
	 */
	@RequestMapping("/export")
	@ResponseBody
	public String export() {
		this.laboratoryService.export();
		return "true";
	}
	
}
