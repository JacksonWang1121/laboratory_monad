package sdibt.group.entity;

import java.io.Serializable;

/**
 * 实验单实体类
 * @title Website.java
 * @author JacksonWang
 * @date 2018年9月19日 上午11:21:40
 * @package sdibt.group.entity
 * @version 1.0
 *
 */
public class Laboraotry implements Serializable {
	
	//主键
	private int id;
	//班级
	private String _class;
	//姓名
	private String stuName;
	//提交时间，如2019-02-28 15:27:18
	private String date;
	//具体时间，如周四第五六节课
	private String time;
	//器材
	private String equipment;
	//补充说明
	private String note;

}
