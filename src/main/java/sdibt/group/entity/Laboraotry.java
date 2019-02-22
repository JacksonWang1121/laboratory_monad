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
	//实验单编号
	private String monadNum;
	//实验单名称
	private String name;
	//备注
	private String note;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMonadNum() {
		return monadNum;
	}
	public void setMonadNum(String monadNum) {
		this.monadNum = monadNum;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}

}
